import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Revenda } from './revenda';
import { Combustivel } from './combustivel'
import { Distribuidora } from './distribuidora'



@Injectable({
  providedIn: 'root'
})
export class RevendaService {

  urlRevenda : string = environment.apiURLBase + '/api/revenda'
  urlCombustivel : string = environment.apiURLBase + '/api/combustivel'
  urlDistribuidora : string = environment.apiURLBase + '/api/distribuidora'

  constructor(
    private http: HttpClient   
  ) { }


  getRevendaId(id: number) : Observable<Revenda> {
    return this.http.get<Revenda>(`${this.urlRevenda}/${id}`);
  }

  salvar(revenda: Revenda): Observable<any> {    
    return this.http.post<any>(this.urlRevenda, revenda);    
  }

  deletar(revenda: Revenda): Observable<any> {
    return this.http.delete<any>(`${this.urlRevenda}/${revenda.id}`);
  }

  atualizar(revenda: Revenda): Observable<any> {
    return this.http.put<Revenda>(`${this.urlRevenda}/${revenda.id}`, revenda);
  }

  getCombustiveis(): Observable<Combustivel[]> {
    return this.http.get<Combustivel[]>(this.urlCombustivel);
  }

  getDistribuidoras(): Observable<Distribuidora[]> {
    return this.http.get<Distribuidora[]>(this.urlDistribuidora);
  }

  buscar(mes: number, idDistribuidora: number) : Observable<Revenda[]> {

    let httpParams = new HttpParams()
    .set("mes", mes ? mes.toString(): "")
    .set("idDistribuidora", idDistribuidora ? idDistribuidora.toString(): "");
    
    const urlConsulta = this.urlRevenda + "?" + httpParams.toString();
    return this.http.get<any>(urlConsulta);

   }

}
