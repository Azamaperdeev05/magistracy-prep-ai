import { db } from '../firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  doc,
  updateDoc,
  getDoc,
  Timestamp
} from 'firebase/firestore';
import { getSavedUser } from './authService';

export interface PaymentOrder {
  id?: string;
  orderRef: string;
  userUid: string;
  userEmail: string;
  userName: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  approvedAt?: string;
}

function generateOrderRef(): string {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `MAG-${num}`;
}

export async function createPaymentOrder(userEmail: string, userUid: string, userName: string): Promise<PaymentOrder> {
  const order: PaymentOrder = {
    orderRef: generateOrderRef(),
    userUid,
    userEmail,
    userName,
    amount: 2990,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  if (db) {
    await addDoc(collection(db, "payments"), order);
  }

  return order;
}

export async function getMyPayments(userUid: string): Promise<PaymentOrder[]> {
  if (!db) return [];
  const q = query(
    collection(db, "payments"),
    where("userUid", "==", userUid),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
}

export async function getPendingPayments(): Promise<PaymentOrder[]> {
  if (!db) return [];
  const q = query(
    collection(db, "payments"),
    where("status", "==", "pending"),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
}

export async function getAllPayments(): Promise<PaymentOrder[]> {
  if (!db) return [];
  const q = query(
    collection(db, "payments"),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
}
