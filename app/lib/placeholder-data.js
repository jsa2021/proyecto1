// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Jsa',
      email: 'santiago19_89@outlook.com',
      password: '123456',
      persona: '410544b3-4001-4271-9855-fec4b6a6442a',
      estado: 'normal',
      creditos: 0,
    },
    {
      id: '410544b3-4001-4271-9855-fec4b6a6442a',
      name: 'Ald',
      email: 'aldana_repetto@hotmail.com',
      password: '123456',
      persona: '410544b2-4001-4271-9855-fec4b6a6442a',
      estado: 'normal',
      creditos: 0,
    },
  ];
  
  const chat = [
    {
      user_id: users[0].id,
      tipo: 'imagen',
      content: '',
      image_url: '/customers/delba-de-oliveira.png',
      date: '25-01-2024-12:39:45',
    },
    {
      user_id: users[1].id,
      tipo: 'texto',
      content: 'Hola',
      image_url: '',
      date: '25-01-2024-12:45:59',
    },
    {
      user_id: users[0].id,
      tipo: 'texto',
      content: 'Hola',
      image_url: '',
      date: '25-01-2024-12:45:59',
    },
  ];
  
  const objetivos = [
    {
      user_id: users[0].id,
      amount: 15795,
      status: 'pendiente',
      date: '2022-12-06',
    },
    {
      user_id: users[1].id,
      amount: 20348,
      status: 'cumplido',
      date: '2022-11-14',
    },
  ];
  

  
  module.exports = {
    users,
    chat,
    objetivos,
  };
  