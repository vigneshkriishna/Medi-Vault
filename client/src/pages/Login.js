import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaMedkit, FaLock } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(email, password);
      
      if (result.success) {
        if (result.user.role === 'doctor') {
          navigate('/doctor-dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        setError(result.message || t('loginFailed'));
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || t('loginFailed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <FaMedkit className="auth-icon" />
          <h2>{t('login')}</h2>
          <p className="auth-subtitle">{t('welcomeBack')}</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">{t('email')}</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder={t('EnterEmail')}
                className="auth-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">{t('password')}</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder={t('EnterPassword')}
                className="auth-input"
              />
              <FaLock className="input-icon" />
            </div>
          </div>

          <button 
            type="submit" 
            className="auth-button"
            disabled={loading}
          >
            {loading ? t('loggingIn') : t('login')}
          </button>
        </form>

        <div className="auth-footer">
          <p className="auth-links">
            <Link to="/forgot-password" className="forgot-link">
              {t('forgotPassword')}
            </Link>
          </p>
          <p className="auth-switch">
            {t('noAccount')} 
            <Link to="/register" className="switch-link">
              {t('registerButton')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;