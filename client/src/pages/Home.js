import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { t } = useTranslation();
  return (
    <>
      <section className="hero">
        <h1>{t('home.title', 'Secure Healthcare Management Platform')}</h1>
        <p className="hero-subtitle">{t('home.subtitle', 'Your medical records, secure and accessible anywhere')}</p>
        <div className="cta-buttons">
          {isAuthenticated ? (
            <button className="get-started-btn" onClick={() => navigate('/dashboard')}>
              {t('home.goToDashboard', 'Go to Dashboard')}
            </button>
          ) : (
            <>
              <button className="get-started-btn" onClick={() => navigate('/register')}>
                {t('home.getStarted', 'Get Started')}
              </button>
              <button className="learn-more-btn" onClick={() => navigate('/features')}>
                {t('home.learnMore', 'Learn More')}
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;