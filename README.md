# 🏃 Maratona Porto 2026

PWA para acompanhar a preparação para a Maratona do Porto (8 Novembro 2026).

**Live:** https://diogomts.github.io/maratona-porto-2026/

## Funcionalidades

### 📅 Plano de Treino
- 25 semanas de treino com navegação semanal
- Checkbox para marcar sessões como feitas
- Overlay com detalhes de cada sessão (corrida, strength, bike)
- Exercícios individuais com checkboxes dentro do overlay
- Estado parcial (amarelo) quando alguns exercícios estão feitos
- Notas por sessão
- Barra de progresso e stats (sessões feitas/total, km corridos/total)

### 💊 Suplementos
- Navegação semana a semana com dias individuais
- Checklist diária adaptada ao tipo de treino (corrida/strength/cross/descanso)
- Objectivo de cada suplemento
- Notas expandíveis com informação detalhada
- Ajuste automático de dose na fase 3 (proteína 30g)

### 💪 Exercícios Segunda (Força & Estabilidade)
- 6 exercícios com séries, reps e notas de execução
- Links para vídeos de demonstração
- Progressão por fase

### 🦵 Exercícios Sexta (Ativação & Proteção)
- 7 exercícios focados em ativação glúteos e proteção articular
- Links para vídeos de demonstração
- Progressão por fase

## Funcionalidades Gerais
- Funciona offline (Service Worker)
- Instalável como app no Android (PWA)
- Dados guardados localmente (localStorage)
- Exportar progresso em CSV (treino + suplementos separados)
- Menu lateral com navegação entre páginas
- Swipe para navegar entre semanas
- Auto-detecta semana e dia actuais

## Stack
- HTML + CSS + JavaScript (vanilla, sem frameworks)
- Sem servidor, sem base de dados
- Hospedado no GitHub Pages (grátis)

## Ficheiros
```
index.html       — Plano de treino (página principal)
suplementos.html — Plano de suplementos
forca.html       — Exercícios de segunda-feira
ativacao.html    — Exercícios de sexta-feira
version.js       — Versão centralizada
sw.js            — Service Worker (offline + cache)
manifest.json    — PWA manifest
icon-192.png     — Ícone 192x192
icon-512.png     — Ícone 512x512
```