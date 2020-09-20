import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TreeNode } from 'primeng/api';

@Injectable({
	providedIn: 'root'
})
export class ConsultasService {

	urlBaseRevenda: string = environment.apiURLBase + '/api/revenda'

	constructor(
		private http: HttpClient
	) { }

	getMediaDePrecoDeVendaPorMunicipio(): Observable<string[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/mediaDePrecoDeVendaPorMunicipio');
	}

	getMediaValorCompraVendaPorBandeira(): Observable<string[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/mediaValorCompraVendaPorBandeira');
	}

	getInformacoesAgrupadosPorDistribuidora(): Observable<string[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/informacoesAgrupadosPorDistribuidora');
	}

	getMediaValorCompraVendaPorMunicipio(): Observable<string[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/mediaValorCompraVendaPorMunicipio');
	}

	getInformacoesAgrupadosPorData(): Observable<TreeNode[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/informacoesAgrupadosPorData');
	}

	getInformacoesImportadasPorSiglaDaRegiao(): Observable<TreeNode[]> {
		return this.http.get<any>(this.urlBaseRevenda + '/informacoesImportadasPorSiglaDaRegiao');
	}

	getFilesystem() {
		return this.http.get<any>('assets/filesystem.json')
		  .toPromise()
		  .then(res => <TreeNode[]>res.data);
		}

}
