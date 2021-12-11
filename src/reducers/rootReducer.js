import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { categoriaReducer } from './categoriaReducer'
import { filtrarReducer } from './filtrarReducer'


export const rootReducer=combineReducers({
  categoria:categoriaReducer,
  auth:authReducer,
  filtro: filtrarReducer
})