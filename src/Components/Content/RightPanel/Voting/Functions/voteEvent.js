import { useEffect, useState } from 'react';
import { api } from './../../../../../Services/Api.js';

export const voteEvent = (value, image_id) => {
  const reqBody = {value, image_id}

  const voteThisDog = async () => {
    try {
      await api.votes.postVote(reqBody)
    } catch (e) {
      console.log('Error' + e)
    }
  }

  voteThisDog()
};
