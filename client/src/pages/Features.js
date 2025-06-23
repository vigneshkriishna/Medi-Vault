import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

function Features() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();

  // Redirect authenticated users to dashboard if they try to access public pages
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section className="features">
        <h2>{t('home.keyFeatures', 'Key Features')}</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="card-icon">🏥</div>
            <h3>{t('home.features.records.title', 'Patient Medical Record Management')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.records.item1', 'Upload/view encrypted medical history')}</li>
              <li>{t('home.features.records.item2', 'Medicine prescriptions management')}</li>
              <li>{t('home.features.records.item3', 'AES-256 encryption for secure storage')}</li>
              <li>{t('home.features.records.item4', 'Export reports')}</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">⏰</div>
            <h3>{t('home.features.reminders.title', 'Smart Reminders')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.reminders.item1', 'Medicine reminders from prescriptions')}</li>
              <li>{t('home.features.reminders.item2', 'Scheduled health checkup alerts')}</li>
              <li>{t('home.features.reminders.item3', 'Push notifications via Firebase')}</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>{t('home.features.chatbot.title', 'AI-Powered Chatbot')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.chatbot.item1', 'Health-related FAQs')}</li>
              <li>{t('home.features.chatbot.item2', 'Prescription/medicine guidance')}</li>
              <li>{t('home.features.chatbot.item3', 'Powered by GPT API')}</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">🔐</div>
            <h3>{t('home.features.access.title', 'Secure Doctor Access')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.access.item1', 'QR code-based access requests')}</li>
              <li>{t('home.features.access.item2', 'Role-based permissions')}</li>
              <li>{t('home.features.access.item3', 'Temporary access management')}</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">📤</div>
            <h3>{t('home.features.export.title', 'Export & Share Records')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.export.item1', 'Encrypted PDF export')}</li>
              <li>{t('home.features.export.item2', 'Download options')}</li>
              <li>{t('home.features.export.item3', 'Access control management')}</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-icon">🔄</div>
            <h3>{t('home.features.future.title', 'Future-Ready Platform')}</h3>
            <ul className="feature-list">
              <li>{t('home.features.future.item1', 'Modular architecture')}</li>
              <li>{t('home.features.future.item2', 'Healthcare ecosystem integration')}</li>
              <li>{t('home.features.future.item3', 'Advanced admin dashboard')}</li>
              <li>{t('home.features.future.item4', 'Scalable infrastructure')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="security-section">
        <h2>{t('home.security.title', 'Enterprise-Grade Security')}</h2>
        <div className="security-features">
          <div className="security-item">
            <h3>{t('home.security.encryption.title', 'AES-256 Encryption')}</h3>
            <p>{t('home.security.encryption.description', 'Military-grade encryption for all stored data')}</p>
          </div>
          
          <div className="security-item">
            <h3>{t('home.security.compliance.title', 'HIPAA Compliant')}</h3>
            <p>{t('home.security.compliance.description', 'Following healthcare data protection standards')}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;