import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IBatch, IBatchId, IStudent} from './batch.interface';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  /*    --------------------------------------------------------    */
  private batchCollection: AngularFirestoreCollection<IBatch>;
  batches: Observable<IBatchId[]>;
  /*    --------------------------------------------------------    */


  private batchesAction$: BehaviorSubject<IBatchId[]> = new BehaviorSubject([
    {
      id: '0',
      name: 'Angular Firebase Feb 2021',
      startDate: '2021-05-10',
      time: '08:30',
      facultyName: 'Vamsee Kalyan Sunkara',
      facultyMobile: '9962266742',
      students: [
        {
          id: '000',
          name: 'Test 1',
          email: 'Test1@asdf.com',
          mobile: '9962266742'
        },
        {
          id: '000',
          name: 'Test 2',
          email: 'Test2@asdf.com',
          mobile: '9182729979'
        },
        {
          id: '000',
          name: 'Test 3',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 4',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 5',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 6',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        }
      ],
      description: `🔥Firebase is a real-time NoSQL Backend as a Service.
         🅰️ Angular is the most popular front end MVC framework.
         Put the two together and you've got magic.
         AngularFire was written by the Firebase team to create a simple and elegant
        API for using Firebase in your Angular applications.
        It makes authentication a breeze, and allows amazing three-way data binding.
        By the end of this course, you'll have created a fully functional app,
        and be ready to start developing an app of your own using Angular, Firebase, and AngularFire.`
    },
    {
      id: '1',
      name: 'Angular Firebase Feb 2021',
      startDate: '2021-05-10',
      time: '08:30',
      facultyName: 'Vamsee Kalyan Sunkara',
      facultyMobile: '9962266742',
      students: [
        {
          id: '000',
          name: 'Test 1',
          email: 'Test1@asdf.com',
          mobile: '9962266742'
        },
        {
          id: '000',
          name: 'Test 2',
          email: 'Test2@asdf.com',
          mobile: '9182729979'
        },
        {
          id: '000',
          name: 'Test 3',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 4',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 5',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        },
        {
          id: '000',
          name: 'Test 6',
          email: 'Test3@asdf.com',
          mobile: '9618342526'
        }
      ],
      description: `🔥Firebase is a real-time NoSQL Backend as a Service.
         🅰️ Angular is the most popular front end MVC framework.
         Put the two together and you've got magic.
         AngularFire was written by the Firebase team to create a simple and elegant
        API for using Firebase in your Angular applications.
        It makes authentication a breeze, and allows amazing three-way data binding.
        By the end of this course, you'll have created a fully functional app,
        and be ready to start developing an app of your own using Angular, Firebase, and AngularFire.`
    },
  ]);
  private batches$: Observable<IBatch[]> = this.batchesAction$.asObservable();

  private selectedBatchAction$: BehaviorSubject<IBatch | null> = new BehaviorSubject(null);
  private selectedBatch$: Observable<IBatch | null> = this.selectedBatchAction$.asObservable();

  constructor(private readonly afs: AngularFirestore) {
    this.batchCollection = afs.collection<IBatch>('batches');
    // 'added' | 'removed' | 'modified'
    this.batches = this.batchCollection.stateChanges(['added']).pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IBatch;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    this.batches.subscribe(value => {
      console.log('-------------------------->>> Added', value);
    });
  }

  addBatch(value: IBatchId): void {
    // value.id = new Date().getTime().toString();
    value.students = [];
    this.batchCollection.add(value);
    // const allBatches: IBatchId[] = [value, ...this.batchesAction$.value];
    // this.batchesAction$.next(allBatches);
  }

  removeBatch(value: IBatchId): void {
    console.log(value);
    const allBatches: IBatchId[] = this.batchesAction$.value.filter(
      batch => batch.id !== value.id
    );
    this.batchesAction$.next(allBatches);
  }

  updateBatch(value: IBatchId): Promise<void> {
    const key = value.id;
    delete value.id;
    return this.batchCollection.doc(key).set(value);
  }

  getBatch(): Observable<IBatch[]> {
    return this.batches;
  }

  getSelectedBatch(): Observable<IBatch> {
    return this.selectedBatch$;
  }

  setSelectedBatch(value: IBatch | null): void {
    if (value) {
      this.selectedBatchAction$.next(JSON.parse(JSON.stringify(value)));
    } else {
      this.selectedBatchAction$.next(null);
    }
  }

  addStudent(batch: IBatchId, student: IStudent): void {
    const targetBatch: IBatch = this.batchesAction$.value.find(value => value.id === batch.id);
    if (targetBatch) {
      student.id = new Date().getTime().toString();
      const existingStudents: IStudent[] = [student, ...targetBatch.students];
      this.batchesAction$.next(
        this.batchesAction$.value.map(value => {
          if (value.id === batch.id) {
            value.students = existingStudents;
            return value;
          }
          return value;
        })
      );
    }
  }
}
