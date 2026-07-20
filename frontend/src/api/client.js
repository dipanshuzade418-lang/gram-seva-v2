// In dev, Vite proxies '/api' to your local backend (see vite.config.js).
// In production (e.g. GitHub Pages), there is no backend at this domain,
// so we point requests at the real deployed backend URL instead.
// Set VITE_API_URL in a .env.production file, e.g.:
//   VITE_API_URL=https://your-backend.onrender.com/api
const BASE = import.meta.env.VITE_API_URL || '/api';

function getToken() {
  return localStorage.getItem('gram_token');
}

async function request(path, { method = 'GET', body, auth = false } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (networkErr) {
    // Backend unreachable entirely (wrong URL, backend down, CORS block, etc.)
    throw new Error('Could not reach the server. Please check your connection and try again.');
  }

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    // We got a response, but it isn't JSON - almost always means BASE is
    // pointing at the wrong place (e.g. a static host with no /api route,
    // which returns an HTML 404 page instead of a JSON error).
    throw new Error('Something went wrong. Please try again.');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.');
  }
  return data;
}

export const api = {
  register: (payload) => request('/auth/register', { method: 'POST', body: payload }),
  login: (payload) => request('/auth/login', { method: 'POST', body: payload }),
  me: () => request('/auth/me', { auth: true }),

  listDoctors: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/doctors${qs ? `?${qs}` : ''}`);
  },
  specializations: () => request('/doctors/specializations'),
  getDoctor: (userId) => request(`/doctors/${userId}`),
  updateDoctorProfile: (payload) => request('/doctors/me/profile', { method: 'PUT', body: payload, auth: true }),

  bookAppointment: (payload) => request('/appointments', { method: 'POST', body: payload, auth: true }),
  myAppointments: () => request('/appointments/mine', { auth: true }),
  setAppointmentStatus: (id, status) => request(`/appointments/${id}/status`, { method: 'PUT', body: { status }, auth: true }),

  createPrescription: (payload) => request('/prescriptions', { method: 'POST', body: payload, auth: true }),
  getPrescription: (appointmentId) => request(`/prescriptions/${appointmentId}`, { auth: true }),

  submitFeedback: (payload) => request('/feedback', { method: 'POST', body: payload, auth: true }),
  doctorFeedback: (doctorId) => request(`/feedback/doctor/${doctorId}`)
};

export { getToken };
