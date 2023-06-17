//  import React from 'react';
//  import { View, StyleSheet } from 'react-native';
//  import Button from './src/components/common/Button';



//  const ParentComponent: React.FC = () => {
//    const handlePress = () => {
//      console.log('Button pressed!');
//    };

//    return (
//      <View style={styles.container}>
//        <Button label="Button" onPress={handlePress} />    
//      </View>
//    );
//  };

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      justifyContent: 'center',
//      alignItems: 'center',
//    },
//  });

//  export default ParentComponent;



// import { View, SvgXml } from 'react-native-svg';
// import svg from './assets/logo.svg';
// import Button from './src/components/common/Button';

// const ParentComponent: React.FC = () => {
//     const handlePress = () => {
//       console.log('Button pressed!');
//     };

// return (
//     <View>
//       <SvgXml xml={svg} width={100} height={100}  style ={styles.svg} />
//     </View>
//   );

//   return (
//          <View style={styles.container}>
//            <Button label="Button" onPress={handlePress} />    
//          </View>
//        );
//      };
    
//      const styles = StyleSheet.create({
//        svg: {
//          flex: 1,
//          justifyContent: 'center',
//          alignItems: 'center',
//        },
//      });
    
//      export default ParentComponent;




// import React from 'react';
// import Button from './src/components/common/Button';
// import svg from './assets/logo.svg';

// const App: React.FC = () => {
//   const handleClick = () => {
//     console.log('Button clicked');
//   };

//   return (
//     <div>
//       <Button onClick={handleClick} svg="./assets/logo.svg">
//         Click Me
//       </Button>
//     </div>
//   );
// };

// export default App;



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