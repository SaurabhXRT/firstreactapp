// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleTextChange = text => {
    var temp = textValue + text;
    setTextValue(temp);
    if (temp == '1+3+9') {
      setIsCardVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      {/* */}
      <View style={styles.upperView}>
        <View>
          <Text style={{ color: 'white', fontSize: 20 }}>app by saurabh kumar</Text>
        </View>
        <View style={styles.upperInnerView}>
          <Text style={{ color: 'white', fontSize: 30 }}>{textValue}</Text>
        </View>
      </View>
      {/*  */}

      <View style={{ backgroundColor: 'grey', height: 3 }}></View>
      {/*  */}
      <View style={styles.bottomView}>
        <View style={styles.bottomInnerView}>
          <View style={styles.columnContainer}>
            <TouchableOpacity
              onPress={() => {
                setTextValue('');
              }}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('7')}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('4')}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('1')}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('.')}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={() => handleTextChange('')}>
              <Text style={styles.buttonText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('8')}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('5')}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('2')}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('0')}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.columnContainer}>
            <TouchableOpacity onPress={() => handleTextChange('%')}>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('9')}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('6')}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('3')}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('00')}>
              <Text style={styles.buttonText}>00</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.columnContainer,
              { backgroundColor: '#363636', borderRadius: 50 },
            ]}>
            <TouchableOpacity onPress={() => handleTextChange('/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('*')}>
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTextChange('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                var output = eval(textValue);

                setTextValue(output);
              }}>
              <View
                style={{
                  backgroundColor: '#f8f5c0',
                  height: 60,
                  width: 60,
                  borderRadius: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.buttonText, { color: 'black' }]}>=</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*  */}

      {isCardVisible ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#9c9e9d',
              width: '80%',
              padding: 30,
              height: 300,
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{ fontSize: 40, textAlign: 'center', color: 'white' }}>
              Hello World
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {
    backgroundColor: '#3e403f',
    flex: 1,
  },
  upperInnerView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10,
  },
  bottomView: {
    backgroundColor: '#3e403f',
    flex: 1,
  },
  bottomInnerView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 27,
  },
  columnContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
});

// primary color = #3e403f
// line color = #363636
// btn color = #f8f5c0
// alert color = #9c9e9d
