import { useEffect, useState } from 'react';
import { api } from './../../../../../Services/Api.js';

export const useDogState = () => {
  const [suspect, setSuspect] = useState();
  const [componentMounted, setComponentMounted] = useState(false);

  const getRandomDog = async () => {
    try {
      const res = await api.search.getRandomDog()
      return res.data[0]
    } catch (e) {
      console.log('Error' + e)
    }
  }

  useEffect(async () => {
    setSuspect(await getRandomDog())
    setComponentMounted(true);
  }, [])

  return [suspect, setSuspect, componentMounted]
};
