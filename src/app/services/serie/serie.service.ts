import { Injectable } from '@angular/core';
import { Remarks } from 'src/app/models/Remark';
import { Serie } from 'src/app/models/Serie';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  series: Serie[];
  remark: Remarks[];





  //hard declaration of information in a series
  constructor() {
    this.series = [];
    this.remark = [];
    this.series.push(new Serie(1,'BATMAN the animated series',new Date(),3,'un univers inégualable','Dark et profond une série au suspence palpitant','https://media.senscritique.com/media/000006473751/source_big/Batman.jpg',[new Remarks(0,new Date,'','')]))
    this.series.push(new Serie(2,'DRAGONBALL',new Date(),8,'De la balle dragonball','wahouuuuuuu','https://img.20mn.fr/CyxU1v0_Qnq7eQSz4YiS-Q/1200x768_dragon-ball-super-suite-directe-officielle-dragon-ball-akira-toriyama.jpg',[new Remarks(0,new Date,'','')]))
    this.series.push(new Serie(3,'MORTEL',new Date(),1,
    'Dans un lycée de banlieue, Sofiane, Victor et Luisa, trois ados que tout oppose, se retrouvent liés par une force surnaturelle incontrôlable. Unissant leurs nouveaux pouvoirs vaudou pour retrouver le frère de Sofiane, le trio découvre que l’amitié au lycée est surtout un moyen de survie…','série palpitante, entré dans un univer froid et démoniaque','https://fr.web.img2.acsta.net/pictures/19/10/22/12/11/5044823.jpg',[new Remarks(0,new Date,'','')]))



  }

  //get an identifier of type number
  getSerieById(serieId: number): Promise<Serie>{
    return new Promise<Serie>(
      (res, rej) => {

       for (let serie of this.series){
         if (serie.id === serieId) {
           res(serie);
           break;
         }
       }
      });
  }
  //adds a series to the series array with an id and returns it to Promise
  addSerie(serieToAdd: Serie): Promise<void> {
    return new Promise<void>(
      (res, rej) =>{

        serieToAdd.id = this.series[this.series.length - 1].id + 1;

        this.series.push(serieToAdd);
        res();
      }
    );
  }


  //edit serie, if id is strictly equal to the modified id then modification added to list-serie
  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>(
      (res, rej) =>
      {
        for(let[index, serie]of this.series.entries()){
          if (serie.id === editedSerie.id){
            this.series[index] = editedSerie;
            res();
            break;
          }
          }
        });
  }

  //add a note to the series which has the same id
addRemarks(serieToAddRemark: Remarks, serieWhereAdd: Serie): Promise<void> {
  return new Promise<void>((res, rej) =>{
    serieToAddRemark.id = serieWhereAdd.remark[serieWhereAdd.remark.length -1].id + 1
    serieWhereAdd.remark.push(serieToAddRemark)
    res()
  })
}
//remove the id which is equivalent to the id of the supp button
  deleteSerie(serieIdToDelete: number): Promise<void> {
    return new Promise<void>((res, rej)=>{
      for(let[index, serie] of this.series.entries()){
        if (serie.id === serieIdToDelete) {
          this.series.splice(index,1);
          res();
          break;
        }
      }
    });
  }
  remarkSerie(addToRemark: Remarks): Promise<void> {
    return new Promise<void>(
      (res, rej) => {


// I get the last book in the array
        // I then retrieve its id and add an id
        addToRemark.id = this.remark[this.remark.length - 1].id + 1;

        this.remark.push(addToRemark);
        res();
      });

  }
}
