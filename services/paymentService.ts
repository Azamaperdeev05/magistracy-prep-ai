import { getSavedUser } from './authService';
import { getDb } from '../firebase';

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

  try {
    const db = await getDb();
    const { collection, addDoc } = await import('firebase/firestore');
    await addDoc(collection(db, "payments"), order);
  } catch (err) {
    console.warn("Failed to create payment order in Firestore:", err);
  }

  return order;
}

export async function getMyPayments(userUid: string): Promise<PaymentOrder[]> {
  try {
    const db = await getDb();
    const { collection, query, where, orderBy, getDocs } = await import('firebase/firestore');
    const q = query(
      collection(db, "payments"),
      where("userUid", "==", userUid),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
  } catch (err) {
    console.warn("Failed to get payments from Firestore:", err);
    return [];
  }
}

export async function getPendingPayments(): Promise<PaymentOrder[]> {
  try {
    const db = await getDb();
    const { collection, query, where, orderBy, getDocs } = await import('firebase/firestore');
    const q = query(
      collection(db, "payments"),
      where("status", "==", "pending"),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
  } catch (err) {
    console.warn("Failed to get pending payments from Firestore:", err);
    return [];
  }
}

export async function getAllPayments(): Promise<PaymentOrder[]> {
  try {
    const db = await getDb();
    const { collection, query, orderBy, getDocs } = await import('firebase/firestore');
    const q = query(
      collection(db, "payments"),
      orderBy("createdAt", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as PaymentOrder));
  } catch (err) {
    console.warn("Failed to get all payments from Firestore:", err);
    return [];
  }
}
