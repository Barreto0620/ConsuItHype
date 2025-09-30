import { Injectable, signal, computed } from '@angular/core';
import { Consultant } from '../interfaces/consultant.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  
  private consultants = signal<Consultant[]>([
    { 
      id: '101',
      name: 'Ana Silva', 
      specialization: 'Recursos Humanos', 
      bio: 'Especialista em recrutamento e seleção, focada em desenvolvimento de talentos e cultura organizacional.' 
    },
    { 
      id: '102',
      name: 'Gabriel Barreto', 
      specialization: 'TI', 
      bio: 'Arquiteto de software com ênfase em microsserviços e computação em nuvem (AWS/Azure).' 
    },
    { 
      id: '103',
      name: 'Sofia Mendes', 
      specialization: 'Comercial', 
      bio: 'Consultora de vendas e negociação, com histórico de sucesso na expansão de mercado.' 
    },
    { 
      id: '104',
      name: 'Ricardo Almeida', 
      specialization: 'Contabilidade', 
      bio: 'Contador experiente, prestando consultoria em compliance fiscal e otimização tributária.' 
    },
    { 
      id: '105',
      name: 'Patrícia Nunes', 
      specialization: 'Recursos Humanos', 
      bio: 'Focada em treinamento e desenvolvimento, e gestão estratégica de desempenho.' 
    },
    { 
      id: '106',
      name: 'Gustavo Rocha', 
      specialization: 'TI', 
      bio: 'Especialista em cibersegurança e proteção de dados (LGPD/GDPR).' 
    }
  ]);

  private specializations = computed(() => {
    const allSpecializations = this.consultants().map(c => c.specialization);
    return ['Todos', ...new Set(allSpecializations)];
  });

  getAllConsultants(): Consultant[] {
    return this.consultants();
  }

  getConsultantById(id: string): Consultant | undefined {
    return this.consultants().find(c => c.id === id);
  }

  getSpecializations(): string[] {
    return this.specializations();
  }

  getFilteredConsultants(filter: string): Consultant[] {
    if (filter === 'Todos') {
      return this.consultants();
    }
    return this.consultants().filter(c => c.specialization === filter);
  }

  addConsultant(consultant: Omit<Consultant, 'id'>): void {
    const newConsultant: Consultant = {
      ...consultant,
      id: Date.now().toString()
    };
    this.consultants.update(current => [...current, newConsultant]);
  }

  updateConsultant(id: string, consultant: Omit<Consultant, 'id'>): void {
    this.consultants.update(current => 
      current.map(c => c.id === id ? { ...consultant, id } : c)
    );
  }

  removeConsultant(id: string): void {
    this.consultants.update(current => current.filter(c => c.id !== id));
  }
}