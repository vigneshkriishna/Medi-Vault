import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Features() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect authenticated users to dashboard if they try to access public pages
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="page-container">
      <h1>MediVault Features</h1>
      <div className="feature-section">
        <h2>Patient Medical Record Management</h2>
        <div className="feature-details">
          <h3>Secure Storage and Access</h3>
          <ul>
            <li>Upload and manage medical history documents</li>
            <li>View and organize medicine prescriptions</li>
            <li>AES-256 encryption for all stored data</li>
            <li>Export medical reports</li>
          </ul>
        </div>

        <h2>Smart Health Reminders</h2>
        <div className="feature-details">
          <h3>Never Miss Important Medical Events</h3>
          <ul>
            <li>Automated medicine reminders</li>
            <li>Customizable checkup schedules</li>
            <li>Real-time notifications via Firebase</li>
          </ul>
        </div>

        <h2>AI-Powered Healthcare Assistant</h2>
        <div className="feature-details">
          <ul>
            <li>24/7 health-related query assistance</li>
            <li>Prescription clarification</li>
            <li>Medicine information and guidance</li>
          </ul>
        </div>

        <h2>Secure Healthcare Provider Access</h2>
        <div className="feature-details">
          <h3>Controlled Access Management</h3>
          <ul>
            <li>QR code-based quick access</li>
            <li>Granular permission controls</li>
            <li>Time-limited access options</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features; 