import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';
import { mockData } from '../mock/mock';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const [appointments, setAppointments] = useState(() => {
    const stored = localStorage.getItem('appointments');
    return stored ? JSON.parse(stored) : mockData.appointments;
  });
  const [prescriptions, setPrescriptions] = useState(() => {
    const stored = localStorage.getItem('prescriptions');
    return stored ? JSON.parse(stored) : mockData.prescriptions;
  });
  const [reports, setReports] = useState(() => {
    const stored = localStorage.getItem('reports');
    return stored ? JSON.parse(stored) : mockData.reports;
  });

  const t = translations[language];

  useEffect(() => { localStorage.setItem('language', language); }, [language]);
  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);
  useEffect(() => { localStorage.setItem('appointments', JSON.stringify(appointments)); }, [appointments]);
  useEffect(() => { localStorage.setItem('prescriptions', JSON.stringify(prescriptions)); }, [prescriptions]);
  useEffect(() => { localStorage.setItem('reports', JSON.stringify(reports)); }, [reports]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  const addAppointment = (appt) => setAppointments((prev) => [{ ...appt, id: Date.now().toString() }, ...prev]);
  const updateAppointment = (id, updates) =>
    setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, ...updates } : a)));

  const addPrescription = (rx) => setPrescriptions((prev) => [{ ...rx, id: Date.now().toString() }, ...prev]);
  const addReport = (rep) => setReports((prev) => [{ ...rep, id: Date.now().toString() }, ...prev]);

  return (
    <AppContext.Provider
      value={{
        language, setLanguage, t, user, login, logout,
        doctors: mockData.doctors, specialties: mockData.specialties,
        appointments, addAppointment, updateAppointment,
        prescriptions, addPrescription,
        reports, addReport,
        reminders: mockData.reminders,
        stats: mockData.stats
      }}>
      {children}
    </AppContext.Provider>
  );
};
