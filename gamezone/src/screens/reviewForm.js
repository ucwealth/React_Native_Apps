import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(10),
  rating: yup.string()
  .required()
  .test('isValidNum', 'Rating must be a number between 1 - 5', (val) => {
    return parseInt(val) < 6 && parseInt(val) > 0
  })
})

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik 
      initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        actions.resetForm
        addReview(values)
      }}
      >
        {(props) => (
            <View>
                <TextInput 
                style={globalStyles.input} 
                placeholder='Review title' 
                onChangeText={props.handleChange('title')} 
                value={props.values.title}
                onBlur={props.handleBlur('title')}
                />
                <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
                <TextInput 
                style={globalStyles.input} 
                placeholder='Review body' 
                onChangeText={props.handleChange('body')} 
                value={props.values.body}
                onBlur={props.handleBlur('body')}
                />
                <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                <TextInput 
                style={globalStyles.input} 
                placeholder='Rating (1-5)' 
                onChangeText={props.handleChange('rating')} 
                value={props.values.rating}
                keyboardType='numeric'
                onBlur={props.handleBlur('rating')}
                />
                <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
                <View style={styles.buttonStyle}>
                  <Button title='Submit' color='white' onPress={props.handleSubmit} />
                </View>
            </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'maroon',
    borderRadius: 7
  }

})