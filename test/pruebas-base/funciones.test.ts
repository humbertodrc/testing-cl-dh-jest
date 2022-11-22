import { getTechnologiesByGroup } from '../../src/pruebas-base/funciones';
describe('Pruebas en funciones.ts', () => {
  test('getTechnologiesByGroup debe retornar tecnologias por grupo', () => {
    const result = getTechnologiesByGroup('Frontend');
    const technologies = [{
      id: 1,
      name: "HTML",
      description: "HyperText Markup Language",
      group: "Frontend"
    },
      {
        id: 2,
        name: "CSS",
        description: "Cascading Style Sheets",
        group: "Frontend"
      },
      {
        id: 3,
        name: "JavaScript",
        description: "JavaScript is a programming language",
        group: "Frontend"
      },
      {
        id: 4,
        name: "React",
        description: "React is a JavaScript library",
        group: "Frontend"
      },
      {
        id: 5,
        name: "Angular",
        description: "Angular is a TypeScript framework",
        group: "Frontend"
      }];
    expect(result).toEqual(technologies);
  
  })
})