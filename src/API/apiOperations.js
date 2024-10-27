import {instance} from '../API/apiInstance';

export const getTrucks = async () => {
  try {
    const { data } = await instance.get('/campers');
    console.log(data);
    return data;
  } catch (error) {
    const response = {
      message: error.response.data.message,
      statusCode: error.response.status,
    };
    console.log(response.message);
  }
};
