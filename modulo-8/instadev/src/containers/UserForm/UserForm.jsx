import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSetName = event => setName(event.target.value);
  const handleSetAvatar = event => setAvatar(event.target.value);
  const handleSetUsername = event => setUsername(event.target.value);
  const handleSetEmail = event => setEmail(event.target.value);

  const handleAddUser = event => {
    const post = JSON.stringify({
      name, avatar, username, email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: post
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar
                  ? <img src={avatar} alt="" />
                  : <img src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png" alt="" />
                }
              </div>

              {name && 
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              }
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container"> 
          <div className="post__form__wrapper">
              <label>Nome</label>
              <input 
                type="text"
                value={name}
                placeholder="Digite seu nome"
                onChange={event => handleSetName(event)}
              />

              <label>Usuário</label>
              <input 
                type="text"
                value={username}
                placeholder="Digite seu usuario"
                onChange={event => handleSetUsername(event)}
              />

              <label>Email</label>
              <input 
                type="email"
                value={email}
                placeholder="Digite seu email"
                onChange={event => handleSetEmail(event)}
              />

              <label>Url da imagem de Perfil (use a url da imagem do LinkedIn)</label>
              <input 
                type="text"
                placeholder="http://..."
                onChange={event => handleSetAvatar(event)}
              />

              <button
                type="button"
                onClick={event => handleAddUser(event)}
              >
              Cadastrar
              </button>
          </div>
        </div>
      </section>

      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
