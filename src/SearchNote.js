import { Icon } from '@iconify/react';

const SearchNote = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <Icon icon="material-symbols:search" width="1.5em" className='search-icon'/>
            <input type="text" placeholder='ketik untuk mencari' onChange={(e) => handleSearchNote(e.target.value)}/>
        </div>
    )
}

export default SearchNote;