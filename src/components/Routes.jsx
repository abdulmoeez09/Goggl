import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Result } from '../components/Result'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='./search*' />
      </Route>
      <Route exact path={['/search', '/images', '/news', '/vedios']}>
        <Result />
      </Route>
    </Switch>
  )
}
