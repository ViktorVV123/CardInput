import React from 'react';
import {DropdownWithSearch} from "./DropdownWithSearch";
import styles from './inputStyle.module.css'
import {TextInput} from "./textInput";
import {DropdownWithStatus} from "./DropdownWithStatus";
import {ChoiseSystemStart} from "./choiseSystemStart";


export const CardAll = ({data}:any) => {

    return (
        <div className={styles.containerInput}>
           <div >

               <div className={styles.containerName}>
                 <div >  Название </div>
                  <div> <TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Короткое Название </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div>Ссылка</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Владелец </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Архитектор </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Сотрудник </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Описание </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Функциональность </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Ссылка на документ </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Статус </div>
                   <div><TextInput/></div>
               </div>


               <div className={styles.containerName}>
                   <div> Отображение системы </div>
                   <div><ChoiseSystemStart data={data}  /></div>
               </div>

               <div className={styles.containerName}>
                   <div>Бизнес блог</div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Тип системы </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Заставка </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Логотип </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Избранное </div>
                   <div><TextInput/></div>
               </div>

               <div className={styles.containerName}>
                   <div> Дата последнего взаимодействия </div>
                   <div><TextInput/></div>
               </div>

           </div>

        </div>
    );
};

