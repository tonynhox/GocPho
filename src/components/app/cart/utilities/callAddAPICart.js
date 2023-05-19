import AxiosInstance from '../../axiosClient/AxiosInstance';

export const updateAPICart = async (id,cart) => {
    try {
        const body = {
            _id:id,
            cart:cart
        }
        await AxiosInstance().post('/user/add-cart-array', body);
        console.log('add ok');
        return true;
    } catch {
        console.log('add error', error)
    }
}