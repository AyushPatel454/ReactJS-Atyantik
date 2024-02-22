import { notificationActions } from './notification-slice.js';
import { cartActions } from './cart-slice.js';
// fetch cart data from the server (firebase - realtime database.)
export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            notificationActions.showNotification({
                status: 'pending',
                title: 'Fetching...',
                message: 'Fetching cart data!',
            })
        );

        // fetch the cart data from the server
        const fetchRequest = async () => {
            const response = await fetch('https://redux-practice-d7720-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json');

            if (!response.ok) {
                throw new Error('Fetching cart data failed.');
            }

            const {quantity = 0, price = 0, items = []} = await response.json();
            console.log(quantity, price, items);

            dispatch(cartActions.replaceCart({
                quantity,
                price,
                items,
            }));
        };

        // call the fetchRequest function.
        try {
            await fetchRequest();

            dispatch(
                notificationActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Fetched cart data successfully!',
                })
            );
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);
        } catch (error) {
            dispatch(
                notificationActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);
        }
    }
};

// send cart data to the server (firebase - realtime database.)
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            notificationActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        // send the cart data to the server
        const sendRequest = async () => {
            const response = await fetch('https://redux-practice-d7720-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        }

        // call the sendRequest function.
        try {
            await sendRequest();

            dispatch(
                notificationActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
    
            // hide the notification after 3 seconds
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);

        } catch (error) {
            dispatch(
                notificationActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );

            // hide the notification after 3 seconds
            setTimeout(() => {
                dispatch(notificationActions.hideNotification());
            }, 3000);
        }

        
    }
}