
 import React, { useEffect, useState } from 'react';
 import { View, Image, StyleSheet } from 'react-native';

 const SplashScreen = () => {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    // Simulate a delay to show the splash screen
     const splashTimer = setTimeout(() => {
       setIsLoading(false);
     }, 3000);

     return () => clearTimeout(splashTimer); // Clean up the timer on component unmount
   }, []);

   if (isLoading) {
     return (
       <View style={styles.container}>
         <Image
           source={require('./assets/svv.png')}
           style={styles.image}
           resizeMode="contain"
         />
       </View>
     );
   } else {
     return (
       <View style={styles.container}>
         <Image
           source={require('./assets/ss.jpg')}
           style={styles.image}
           resizeMode="contain"
         />
       </View>
     );
   }
 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   image: {
     width: '80%',
     height: '80%',
   },
 });

 export default SplashScreen;
