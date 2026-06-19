const EXERCISES_DATA = {
  "exercises": {
    "single-leg-deadlift": {
      "name": "Peso morto unilateral (Single-leg deadlift) — 3x10/lado",
      "focus": "Isquiotibiais + equilíbrio + glúteo",
      "series": "<span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 45s",
      "notes": [
        "Manter costas rectas, olhar para o chão",
        "Joelho de apoio ligeiramente flectido",
        "Controlar a descida (2-3 segundos)",
        "Se perder equilíbrio, tocar o pé no chão e recomeçar"
      ],
      "links": [
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/single-leg-romanian-deadlift/"
        },
        {
          "label": "ExRx",
          "url": "https://exrx.net/WeightExercises/GluteusMaximus/BWSingleLegStiffLegDeadlift"
        }
      ]
    },
    "step-ups": {
      "name": "Subidas ao banco (Step-ups) — 3x10/lado",
      "focus": "Quadricípite + glúteo",
      "series": "<span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 45s",
      "notes": [
        "Subir com a perna toda (não empurrar com a de trás)",
        "Descer controlado",
        "Banco/degrau estável, ~30 cm de altura",
        "Se sentir dor na anca direita, reduzir altura do banco"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/step-up"
        },
        {
          "label": "ExRx",
          "url": "https://exrx.net/WeightExercises/Quadriceps/BBStepUp"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/single-leg-step-up/"
        }
      ]
    },
    "pontes-gluteo-unilateral": {
      "name": "Pontes de glúteo unilateral (Single-leg glute bridge) — 3x10/lado",
      "focus": "Estabilidade pélvica",
      "series": "<span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 45s",
      "notes": [
        "Deitado de costas, um pé no chão, outro esticado",
        "Subir a anca até alinhar com o joelho e ombro",
        "Apertar o glúteo no topo (1-2 segundos)",
        "Não deixar a anca rodar para o lado"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/single-leg-glute-bridge"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/24519/single-leg-glute-bridge/"
        }
      ]
    },
    "calf-raises-unilateral": {
      "name": "Elevação de gémeos unilateral (Single-leg calf raise) — 3x10/lado",
      "focus": "Gémeos — força unilateral",
      "series": "<span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 30s → <span>10 esq → 10 dir</span> 45s",
      "notes": [
        "Num degrau ou step, calcanhar a pender para fora",
        "Subir até à ponta do pé, descer abaixo do nível do degrau",
        "Controlar a descida (2 segundos)",
        "Apoiar a mão na parede para equilíbrio"
      ],
      "links": [
        {
          "label": "ExRx",
          "url": "https://exrx.net/WeightExercises/Gastrocnemius/DBSingleLegCalfRaise"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/cable-standing-calf-raise-guide/"
        }
      ]
    },
    "prancha-frontal": {
      "name": "Prancha frontal (Front plank) — 3x30-45s",
      "focus": "Core — estabilidade central",
      "series": "<span>30-45s</span> 20s → <span>30-45s</span> 20s → <span>30-45s</span> 30s",
      "notes": [
        "Cotovelos debaixo dos ombros",
        "Corpo em linha recta da cabeça aos calcanhares",
        "Apertar abdominais e glúteos",
        "Se 45s for fácil, progredir para 60s (semana 7+)"
      ],
      "links": [
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/front-plank/"
        },
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/plank"
        }
      ]
    },
    "prancha-lateral": {
      "name": "Prancha lateral (Side plank) — 3x20-30s/lado",
      "focus": "Oblíquos + estabilidade lateral",
      "series": "<span>20-30s esq → dir</span> 20s → <span>20-30s esq → dir</span> 20s → <span>20-30s esq → dir</span>",
      "notes": [
        "Cotovelo debaixo do ombro, corpo em linha",
        "Anca não pode cair para o chão",
        "Se difícil, apoiar joelho de baixo",
        "Se 30s for fácil, progredir para 40s (semana 7+)"
      ],
      "links": [
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/side-plank/"
        },
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/side-plank-lift"
        }
      ]
    },
    "pontes-gluteo-bilateral": {
      "name": "Pontes de glúteo bilateral (Glute bridge) — 3x15",
      "focus": "Glúteo máximo — ativação",
      "series": "<span>15 reps</span> 20s → <span>15 reps</span> 20s → <span>15 reps</span> 30s",
      "notes": [
        "Deitado de costas com os joelhos dobrados",
        "Levantar a anca até formar uma linha recta",
        "Pressionar pelos calcanhares, segurar 2s no topo",
        "Não subir a anca em demasia; pés perto do corpo"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/hip-thrust-ac1b456c-4d43-4cbd-bcdc-a8a519852fdd"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/glute-bridge/"
        }
      ]
    },
    "clamshells": {
      "name": "Abertura de anca com banda (Clamshells) — 3x15/lado",
      "focus": "Glúteo médio (tendinopatia)",
      "series": "<span>15 esq → 15 dir</span> 20s → <span>15 esq → 15 dir</span> 20s → <span>15 esq → 15 dir</span> 30s",
      "notes": [
        "Deitado de lado, joelhos a 90°, pés juntos",
        "Abrir o joelho de cima sem rodar a anca",
        "Banda elástica acima dos joelhos",
        "Movimento lento e controlado (não usar impulso)",
        "Exercício chave para a tendinopatia do glúteo médio"
      ],
      "links": [
        {
          "label": "Lift Manual",
          "url": "https://liftmanual.com/side-lying-clam/"
        },
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/mini-loop-band-side-lying-clam"
        }
      ]
    },
    "hip-abduction": {
      "name": "Abdução da anca deitado (Side-lying hip abduction) — 3x12/lado",
      "focus": "Glúteo médio",
      "series": "<span>12 esq → 12 dir</span> 20s → <span>12 esq → 12 dir</span> 20s → <span>12 esq → 12 dir</span> 30s",
      "notes": [
        "Deitado de lado, perna de baixo ligeiramente flectida",
        "Levantar a perna de cima (30-40°), manter recta",
        "Não rodar a anca para trás",
        "Controlar a descida (não deixar cair)"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/mini-loop-band-side-lying-hip-abduction"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/side-plank-hip-abduction/"
        }
      ]
    },
    "calf-raises-bilateral": {
      "name": "Elevação de gémeos bilateral (Calf raises) — 3x15",
      "focus": "Gémeos — manutenção",
      "series": "<span>15 reps</span> 20s → <span>15 reps</span> 20s → <span>15 reps</span> 30s",
      "notes": [
        "Pés à largura das ancas",
        "Subir até à ponta dos pés, descer controlado",
        "Amplitude completa (calcanhar abaixo do nível se em degrau)",
        "Ritmo: 2s subir, 2s descer"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/calf-raise"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/dumbbell-standing-calf-raise/"
        }
      ]
    },
    "dead-bug": {
      "name": "Dead bug — 3x8 cada lado",
      "focus": "Anti-extensão — core profundo",
      "series": "<span>8 esq → 8 dir</span> 20s → <span>8 esq → 8 dir</span> 20s → <span>8 esq → 8 dir</span>",
      "notes": [
        "Manter lombar colada ao chão durante todo o movimento",
        "Começar com pernas a 90°; progredir para extensão completa da perna",
        "Movimento lento e controlado — sem pressa",
        "Se a lombar descolar do chão, reduzir amplitude"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/dead-bug"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/dead-bug-exercise/"
        }
      ]
    },
    "bird-dog": {
      "name": "Bird dog — 3x8 cada lado",
      "focus": "Anti-rotação — estabilidade lombar",
      "series": "<span>8 esq → 8 dir</span> 20s → <span>8 esq → 8 dir</span> 20s → <span>8 esq → 8 dir</span>",
      "notes": [
        "Segurar 2-3s no topo, manter anca nivelada",
        "Não rodar a anca — imaginar um copo de água nas costas",
        "Progressão: adicionar pausa de 5s ou toque cotovelo-joelho entre reps",
        "Ativar abdominais antes de estender"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/bird-dog"
        }
      ]
    },
    "plank-shoulder-tap": {
      "name": "Plank com shoulder tap — 3x10 cada lado",
      "focus": "Anti-rotação + estabilidade escapular",
      "series": "<span>10 esq → 10 dir</span> 20s → <span>10 esq → 10 dir</span> 20s → <span>10 esq → 10 dir</span>",
      "notes": [
        "Posição de prancha alta (braços esticados)",
        "Tocar o ombro oposto com a mão, minimizando balanço lateral",
        "Afastar os pés para facilitar, juntar para dificultar",
        "Manter ancas paralelas ao chão"
      ],
      "links": [
        {
          "label": "Fitbod",
          "url": "https://fitbod.me/exercises/plank-shoulder-taps"
        }
      ]
    },
    "hollow-body-hold": {
      "name": "Hollow body hold — 3x20-30s",
      "focus": "Transverso abdominal — ativação profunda",
      "series": "<span>20-30s</span> 20s → <span>20-30s</span> 20s → <span>20-30s</span>",
      "notes": [
        "Deitado de costas, braços acima da cabeça",
        "Lombar colada ao chão, pernas e ombros ligeiramente levantados",
        "Começar com joelhos fletidos; progredir para pernas estendidas",
        "Se lombar descolar, dobrar ligeiramente os joelhos"
      ],
      "links": [
        {
          "label": "Vídeo (stream)",
          "url": "https://stream.mux.com/U01x7nz2oiFi00CXbacwALEdHqggGLe4yAoIgQ94019Y4Y.m3u8"
        },
        {
          "label": "Fitness Volt",
          "url": "https://fitnessvolt.com/hollow-hold/"
        },
        {
          "label": "Caliverse",
          "url": "https://www.caliverse.app/exercises/hollow-body-hold-32"
        }
      ]
    }
  },
  "sessions": {
    "forca": [
      "single-leg-deadlift",
      "step-ups",
      "pontes-gluteo-unilateral",
      "calf-raises-unilateral",
      "prancha-frontal",
      "prancha-lateral"
    ],
    "ativacao": [
      "pontes-gluteo-bilateral",
      "pontes-gluteo-unilateral",
      "clamshells",
      "hip-abduction",
      "calf-raises-bilateral",
      "prancha-frontal",
      "prancha-lateral"
    ],
    "core": [
      "dead-bug",
      "bird-dog",
      "plank-shoulder-tap",
      "hollow-body-hold"
    ]
  }
};
