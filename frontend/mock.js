export const mockData = {
  specialties: [
    { id: 'general', en: 'General Physician', hi: 'सामान्य चिकित्सक', mr: 'सामान्य वैद्य' },
    { id: 'pediatrics', en: 'Pediatrics', hi: 'बाल रोग', mr: 'बालरोग' },
    { id: 'cardiology', en: 'Cardiology', hi: 'हृदय रोग', mr: 'हृदयरोग' },
    { id: 'dermatology', en: 'Dermatology', hi: 'त्वचा रोग', mr: 'त्वचारोग' },
    { id: 'gynecology', en: 'Gynecology', hi: 'स्त्री रोग', mr: 'स्त्रीरोग' },
    { id: 'orthopedics', en: 'Orthopedics', hi: 'हड्डी रोग', mr: 'हाडांचे रोग' },
    { id: 'ent', en: 'ENT Specialist', hi: 'कान-नाक-गला', mr: 'कान-नाक-घसा' },
    { id: 'psychiatry', en: 'Psychiatry', hi: 'मानसिक स्वास्थ्य', mr: 'मानसिक आरोग्य' }
  ],
  doctors: [
    { id: 'd1', name: 'Dr. Rajesh Sharma', specialty: 'general', experience: 12, rating: 4.8, fee: 300, city: 'Pune', avatar: 'https://ui-avatars.com/api/?name=Rajesh+Sharma&background=059669&color=fff&size=200', available: true, reviews: 234, education: 'MBBS, MD - Medicine', languages: ['English', 'Hindi', 'Marathi'] },
    { id: 'd2', name: 'Dr. Priya Patil', specialty: 'pediatrics', experience: 8, rating: 4.9, fee: 400, city: 'Mumbai', avatar: 'https://ui-avatars.com/api/?name=Priya+Patil&background=0891b2&color=fff&size=200', available: true, reviews: 189, education: 'MBBS, MD - Pediatrics', languages: ['English', 'Marathi', 'Hindi'] },
    { id: 'd3', name: 'Dr. Anil Kumar', specialty: 'cardiology', experience: 15, rating: 4.7, fee: 600, city: 'Delhi', avatar: 'https://ui-avatars.com/api/?name=Anil+Kumar&background=dc2626&color=fff&size=200', available: false, reviews: 412, education: 'MBBS, MD, DM - Cardiology', languages: ['English', 'Hindi'] },
    { id: 'd4', name: 'Dr. Sneha Deshmukh', specialty: 'dermatology', experience: 6, rating: 4.6, fee: 350, city: 'Nagpur', avatar: 'https://ui-avatars.com/api/?name=Sneha+Deshmukh&background=7c3aed&color=fff&size=200', available: true, reviews: 156, education: 'MBBS, MD - Dermatology', languages: ['English', 'Marathi', 'Hindi'] },
    { id: 'd5', name: 'Dr. Meera Iyer', specialty: 'gynecology', experience: 10, rating: 4.9, fee: 500, city: 'Bangalore', avatar: 'https://ui-avatars.com/api/?name=Meera+Iyer&background=ec4899&color=fff&size=200', available: true, reviews: 298, education: 'MBBS, MS - OBGY', languages: ['English', 'Hindi', 'Tamil'] },
    { id: 'd6', name: 'Dr. Sunil Joshi', specialty: 'orthopedics', experience: 18, rating: 4.8, fee: 550, city: 'Nashik', avatar: 'https://ui-avatars.com/api/?name=Sunil+Joshi&background=0369a1&color=fff&size=200', available: true, reviews: 367, education: 'MBBS, MS - Orthopedics', languages: ['English', 'Marathi', 'Hindi'] },
    { id: 'd7', name: 'Dr. Kavita Rao', specialty: 'ent', experience: 7, rating: 4.5, fee: 300, city: 'Hyderabad', avatar: 'https://ui-avatars.com/api/?name=Kavita+Rao&background=d97706&color=fff&size=200', available: true, reviews: 142, education: 'MBBS, MS - ENT', languages: ['English', 'Telugu', 'Hindi'] },
    { id: 'd8', name: 'Dr. Arjun Menon', specialty: 'psychiatry', experience: 9, rating: 4.7, fee: 450, city: 'Kochi', avatar: 'https://ui-avatars.com/api/?name=Arjun+Menon&background=475569&color=fff&size=200', available: true, reviews: 201, education: 'MBBS, MD - Psychiatry', languages: ['English', 'Malayalam', 'Hindi'] }
  ],
  appointments: [
    { id: 'a1', doctorId: 'd1', doctorName: 'Dr. Rajesh Sharma', specialty: 'general', patientName: 'Ramesh Yadav', date: '2025-07-25', time: '10:00 AM', status: 'accepted', fee: 300, symptoms: 'Fever and body ache' },
    { id: 'a2', doctorId: 'd2', doctorName: 'Dr. Priya Patil', specialty: 'pediatrics', patientName: 'Ramesh Yadav', date: '2025-07-28', time: '4:00 PM', status: 'pending', fee: 400, symptoms: "Child's cough" }
  ],
  prescriptions: [
    {
      id: 'p1', doctorName: 'Dr. Rajesh Sharma', patientName: 'Ramesh Yadav', date: '2025-07-10',
      diagnosis: 'Viral fever with mild dehydration',
      medicines: [
        { name: 'Paracetamol 500mg', dosage: '1 tablet', frequency: 'Three times a day', duration: '5 days', instructions: 'After meals' },
        { name: 'ORS Solution', dosage: '1 glass', frequency: 'Every 4 hours', duration: '3 days', instructions: 'Sip slowly' },
        { name: 'Vitamin C 500mg', dosage: '1 tablet', frequency: 'Once a day', duration: '7 days', instructions: 'With breakfast' }
      ],
      advice: 'Take plenty of rest and drink lots of fluids. Return in 5 days for follow-up.'
    }
  ],
  reports: [
    { id: 'r1', name: 'Blood Test Report.pdf', type: 'PDF', date: '2025-07-08', size: '245 KB' },
    { id: 'r2', name: 'X-Ray Chest.jpg', type: 'Image', date: '2025-07-05', size: '1.2 MB' }
  ],
  reminders: [
    { id: 'rm1', medicine: 'Paracetamol 500mg', time: '8:00 AM', taken: true },
    { id: 'rm2', medicine: 'Paracetamol 500mg', time: '2:00 PM', taken: false },
    { id: 'rm3', medicine: 'Vitamin C', time: '9:00 AM', taken: true }
  ],
  stats: {
    patients: '50,000+', doctors: '2,500+', consultations: '1,20,000+', villages: '5,000+'
  }
};
