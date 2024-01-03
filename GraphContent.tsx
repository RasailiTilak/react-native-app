// import React, { useEffect, useState } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { LineChart, Grid } from 'react-native-svg-charts';
// import StackedBarChart from 'react-native-svg-charts'; // Ensure the path is correct



// const GraphContent = () => {
//     const [sensorData, setSensorData] = useState<Array<{ time: string; co2: number; temperature: number; humidity: number; ec: number; ph: number; wt: number; }>>([]);

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch sensor data from your API endpoint (replace 'YOUR_API_ENDPOINT' with your actual endpoint)
//     fetch('http://121.78.116.56/mini-farm/Mini-Farm-web/minifarm.php')
//       .then((response) => response.json())
//       .then((data) => {
//         setSensorData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   // Extracting data for x-axis (time) and y-axis (sensor values)
//   const xAxisData = sensorData.map((item) => item.time);
//   const co2Data = sensorData.map((item) => item.co2);
//   const temperatureData = sensorData.map((item) => item.temperature);
//   // Add more sensor data points in a similar manner

//   // Combine data for plotting multiple lines on the graph
//   const data = [
//     {
//       data: co2Data,
//       svg: { stroke: 'red' }, // Customize line color for CO2 data
//     },
//     {
//       data: temperatureData,
//       svg: { stroke: 'blue' }, // Customize line color for temperature data
//     },
//     // Add more objects for additional sensor data
//   ];

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <LineChart
//         style={{ flex: 1 }}
//         data={data}
//         contentInset={{ top: 20, bottom: 20 }}
//       >
//         <Grid />
//       </LineChart>
//     </View>
//   );
// };

// export default GraphContent;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function GraphContent() {
  return (
    <View>
      <Text>GraphContent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})