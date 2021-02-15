import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {BusyIndicatorService} from '../../../../services/busy-indicator/busy-indicator.service';
import firebase from 'firebase';
import {IFaculty, ModuleConfig} from '../../utilities/ModuleConfig';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private action: AngularFirestoreCollection<IFaculty>;
  readonly data$: Observable<IFaculty[]>;
  private activeUser = 'Vamsee Kalyan';

  constructor(
    firestore: AngularFirestore,
    public busyIndicator: BusyIndicatorService
  ) {
    this.action = firestore.collection<IFaculty>(ModuleConfig.name_lowercase_plural);
    this.data$ = firestore
      .collection<IFaculty>(ModuleConfig.name_lowercase_plural, (ref) => {
        return ref.where('deleted', '==', false).orderBy('createdOn');
      })
      .valueChanges();
  }

  addData(data: IFaculty): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (data.name.trim().length > 0) {
        const busyIndicatorId = this.busyIndicator.show();
        const docRef = this.action.ref.doc();
        const name = data.name.trim();
        const email = data.email.trim();
        const mobile = data.mobile.trim();
        const id = docRef.id;
        const deleted = false;
        const createdOn = this.getServerTime();
        const updatedOn = this.getServerTime();
        const createdBy = this.activeUser;
        const updatedBy = this.activeUser;
        try {
          await docRef.set({name, id, mobile, email, createdOn, updatedOn, createdBy, updatedBy, deleted, });
          this.busyIndicator.hide(busyIndicatorId);
          resolve(id);
        } catch (e) {
          this.busyIndicator.hide(busyIndicatorId);
          reject(e);
        }
      }
    });
  }

  updateData(data: IFaculty): Promise<any> {
    return new Promise(async (resolve, reject) => {
      if (data.name.trim().length > 0) {
        const busyIndicatorId = this.busyIndicator.show();
        const docRef = this.action.doc(data.id).ref;
        const name = data.name.trim();
        const email = data.email.trim();
        const mobile = data.mobile.trim();
        const updatedOn = this.getServerTime();
        const updatedBy = this.activeUser;
        try {
          await docRef.update({name, email, mobile, updatedOn, updatedBy});
          resolve(docRef.id);
          this.busyIndicator.hide(busyIndicatorId);
        } catch (e) {
          this.busyIndicator.hide(busyIndicatorId);
          reject(e);
        }
      }
    });
  }

  deleteData(data: IFaculty): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const busyIndicatorId = this.busyIndicator.show();
      try {
        const docRef = await this.action.doc(data.id);
        const doc = await docRef.get().toPromise();
        const updatedOn = this.getServerTime();
        const updatedBy = this.activeUser;
        await docRef.set({...doc.data(), deleted: true, updatedOn, updatedBy, });
        resolve(doc.id);
        this.busyIndicator.hide(busyIndicatorId);
      } catch (e) {
        this.busyIndicator.hide(busyIndicatorId);
        reject(e);
      }
    });
  }

  getData(): Observable<IFaculty[]> {
    return this.data$;
  }

  getServerTime(): any {
    return firebase.firestore.Timestamp.now().seconds * 1000;
  }
}
