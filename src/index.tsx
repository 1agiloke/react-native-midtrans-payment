import { NativeModules } from 'react-native';

interface CheckoutItem {
  id: string;
  price: number;
  quantity: number;
  name: string;
}

interface CheckoutOptions {
  client_key: string;
  merchant_base_url: string;
  language?: string;
  items: CheckoutItem[];
  order_id: string;
  payment_method?: number;
}

const { ReactNativeMidtrans } = NativeModules;

const exported = {
  checkout: (options: CheckoutOptions): Promise<any> => {
    if (!options.payment_method) {
      options.payment_method = -1;
    }

    if (!options.language) {
      options.language = 'en';
    }

    return ReactNativeMidtrans.checkout(options);
  },
  getConstants: () => {
    return ReactNativeMidtrans.getConstants();
  },
};

export default exported;
