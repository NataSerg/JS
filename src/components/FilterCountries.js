function FilterCountries({filterCountries}) {
    return <input type={'text'} placeholder={'Search here'} onKeyUp={e => filterCountries(e.currentTarget.value)} />
    
}

export default FilterCountries