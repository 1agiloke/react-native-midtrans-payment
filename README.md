# @knax/react-native-midtrans

Connect React Native to Midtrans Payment Gateway
Currently only support Android platform, iOS support will come in few hours

## Installation

```sh
npm install @knax/react-native-midtrans
```

You need to add Midtrans SDK inside your module level build.gradle

```groovy
allprojects {
    repositories {
        ...
        maven { url "http://dl.bintray.com/pt-midtrans/maven" }
    }
}
```

You need to disable usesCleartextTraffic on android/app/src/debug/AndroidManifest.xml
But if you do that, you can't access bundle file using http, so you need to add networkSecurityConfig for your machine IP address
Check the example on example folder

Debug AndroidManifest.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application tools:targetApi="28"
      tools:ignore="GoogleAppIndexingWarning"
      android:networkSecurityConfig="@xml/network_security_config"/>
</manifest>
```

xml/network_security_config.xml (change your ip here)
```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
  <domain-config cleartextTrafficPermitted="true">
    <domain includeSubdomains="true">10.0.2.2</domain>
    <domain includeSubdomains="true">10.0.2.2:8081</domain>
  </domain-config>
</network-security-config>
```

## Usage

```js
import ReactNativeMidtrans from "@knax/react-native-midtrans";

// ...
ReactNativeMidtrans.checkout({
    order_id: Math.random().toString(),
    client_key: '', // from midtrans client
    merchant_base_url: '', // your backend url for handling charge IP
    items: [
      {
        id: Math.random().toString(),
        price: 100000,
        quantity: 2,
        name: 'Items',
      },
    ],
}).then((result) => {
    console.log('result', result);
}).catch(err => {
    console.log('err', err);
});
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
