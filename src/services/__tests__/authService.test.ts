import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  getSavedUser,
  saveUser,
  removeToken,
  setToken,
  getToken,
  authHeaders,
  checkAndIncrementAiLimit,
  UserProfile
} from '../authService';

describe('authService', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  describe('token and storage helpers', () => {
    it('saves and retrieves token from localStorage', () => {
      setToken('test-id-token-123');
      expect(getToken()).toBe('test-id-token-123');

      removeToken();
      expect(getToken()).toBeNull();
      expect(getSavedUser()).toBeNull();
    });

    it('returns empty headers when unauthenticated and bearer headers when authenticated', () => {
      expect(authHeaders()).toEqual({ 'Content-Type': 'application/json' });

      setToken('my-token');
      expect(authHeaders()).toEqual({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token'
      });
    });

    it('defaults is_premium to true when reading saved user profile', () => {
      const legacyProfile = {
        id: 12345,
        uid: 'user-uid-123',
        email: 'test@example.com',
        full_name: 'Test User',
        is_active: true,
      } as UserProfile;

      saveUser(legacyProfile);

      const loadedUser = getSavedUser();
      expect(loadedUser).not.toBeNull();
      expect(loadedUser?.is_premium).toBe(true);
    });
  });

  describe('checkAndIncrementAiLimit', () => {
    it('returns allowed: false when no user is logged in', () => {
      const res = checkAndIncrementAiLimit();
      expect(res).toEqual({ allowed: false, remaining: 0 });
    });

    it('returns allowed: true with unlimited remaining queries when user is premium', () => {
      saveUser({
        id: 1,
        uid: 'u1',
        email: 'u1@test.com',
        full_name: 'U1',
        is_active: true,
        is_premium: true
      });

      const res = checkAndIncrementAiLimit();
      expect(res).toEqual({ allowed: true, remaining: 9999 });
    });
  });
});
