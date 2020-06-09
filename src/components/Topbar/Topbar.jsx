import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg alt="Logo Instagram" />
      </Link>
      <div className="topbar__group">
        <button className="topbar__icon">
          <Link to="/users">
            <span className="fas fa-users"></span>
            <span>Usuários</span>
          </Link>
        </button>
        <button className="topbar__icon">
          <Link to="/newuser">
            <span className="fas fa-user-plus"></span>
            <span>Nova Conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);

export default Topbar;
