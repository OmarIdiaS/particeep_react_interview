import { connect } from "react-redux"
import React from 'react'
import {setFilterAction} from "../store/movieActions"
import { filterSelector} from '../store/movieSelectors'

 
export function Category({value, onChange, categories}){
    return <div>
        {categories.filter(({category}, index) => {
            return categories.findIndex(item => item.category === category) === index 
        })
            .map(movie => {
                return <button className={"btn tag is-info is-large c" + (value === movie.category ? " categ" : "")}   onClick = {() => onChange(movie.category)}>{movie.category} </button> 
        })}
        <button className={"btn tag is-info is-large c" + (value === null ? " categ" : "")}   onClick = {() => onChange(null)}>All </button> 
    </div>
}

export const CategoryFilter = connect(
    state => ({
        value : filterSelector(state)
    }),
    dispatch => ({
        onChange : (value) => dispatch(setFilterAction(value))
    })
)(Category)