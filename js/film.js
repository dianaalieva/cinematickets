class Film{

   constructor(filmData){
    this._data=filmData;
    this.time=`${getTime(9,22)}:${getTime(0,60)}`;
   }

   isNotForAdult(){
    return this._data.adult!==true;  
   }
   getTitle(){
    return this._data.title||this._data.name;   
   }
   getTime(){
    return this._data.time; 
   }
   getId(){
    return this._data.id || `${this._data.name.replaceAll(" ","-")}-${this._data.time}`; 
   }
   getGenres(){
    return this._data.genres.join(", ");  
   }
   renderFilmTableItem(){
    return `
    <tr class="table__row">
                    <td class="table__column table__column_check">
                      <input
                        type="checkbox"
                        class="table__check"
                        id="${this.getId()}"
                      />
                      <label for="${this.getId()}">
                        <svg
                          viewBox="0 0 11 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </td>
                    <td class="table__column table__column_time">${this.getTime()}</td>
                    <td class="table__column">${this.getTitle()}</td>
                    <td class="table__column">${this.getGenres()}</td>
    </tr>`; 
   }
} 




   
  
  