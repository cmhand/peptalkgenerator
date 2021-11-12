import { first, second, third, fourth } from '../constants/pep';

export class PepService {
  static generatePep() {
    let pieces = [
      first[Math.floor(Math.random() * first.length)],
      second[Math.floor(Math.random() * second.length)],
      third[Math.floor(Math.random() * third.length)],
      fourth[Math.floor(Math.random() * fourth.length)],
    ];

    return pieces.join(' ');
  }

  static getPepHistory(): string[] {
    const peps: string | null = localStorage.getItem('pepHistory');
    return peps ? JSON.parse(peps) : [];
  }

  static addPepToHistory(pep: string, history: string[]): void {
    localStorage.setItem('pepHistory', JSON.stringify([...history, pep]));
  }
}