import { Subscription } from 'rxjs';

//Function to unsubscribe observable:

export const unsubscribePetition = (data: Subscription[]) => {
  data.forEach((item) => {
    item.unsubscribe();
  });

  data = [];
};
