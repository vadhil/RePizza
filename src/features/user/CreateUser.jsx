import { useState } from 'react';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';

function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateName(username));
    navigate('./menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Halo! beritahukan kepada kami nama anda:
      </p>

      <input
        type="text"
        placeholder="Nama kamu"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== '' && (
        <div>
          <Button type="primary">Mulai memesan</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

export const getUsername = (state) => state.user.username;
