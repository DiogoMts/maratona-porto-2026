# 🏃 Maratona Porto 2026

PWA para acompanhar a preparação para a Maratona do Porto (8 Novembro 2026).

**Live:** https://diogomts.github.io/maratona-porto-2026/

## Funcionalidades

### 📅 Plano de Treino
- 25 semanas de treino com navegação semanal
- Checkbox para marcar sessões como feitas
- Overlay com detalhes de cada sessão (corrida, strength, bike)
- Exercícios de força com séries visuais, notas de execução e links para vídeos
- Estado parcial (amarelo) quando alguns exercícios estão feitos
- Notas por sessão
- Barra de progresso e stats (sessões feitas/total, km corridos/total)
- Auto-detecta semana e dia actuais ao abrir

### 💊 Suplementos
- Navegação semana a semana com dias individuais
- Checklist diária adaptada ao tipo de treino (corrida/strength/cross/descanso)
- Objectivo de cada suplemento
- Notas expandíveis com informação detalhada
- Ajuste automático de dose na fase 3 (proteína 30g)

### 💪 Exercícios (integrados no plano)
- **Força & Estabilidade** (Segunda) — 6 exercícios
- **Ativação & Proteção** (Sexta) — 7 exercícios
- Séries visuais com tempos de descanso
- Notas de execução por exercício
- Links para vídeos de demonstração
- Checkboxes individuais por exercício
- Dados externalizados em `exercises-data.js` (catálogo + sessões por referência)

## Funcionalidades Gerais
- Funciona offline (Service Worker)
- Instalável como app no Android/iOS (PWA)
- Dados guardados localmente (localStorage)
- Sincronização via Firebase (login Google)
- Exportar progresso em CSV (treino + suplementos separados)
- Exportar backup JSON completo
- Menu lateral com navegação entre páginas
- Swipe para navegar entre semanas
- Auto-detecta semana e dia actuais

## Stack
- HTML + CSS + JavaScript (vanilla, sem frameworks)
- Firebase Realtime Database (sincronização entre dispositivos)
- Hospedado no GitHub Pages (grátis)

## Ficheiros
```
index.html          — Plano de treino (página principal)
suplementos.html    — Plano de suplementos
exercises-data.js   — Catálogo de exercícios (dados estruturados)
firebase.js         — Autenticação e sincronização Firebase
version.js          — Versão centralizada
sw.js               — Service Worker (offline + cache)
manifest.json       — PWA manifest
icon-192.png        — Ícone 192x192
icon-512.png        — Ícone 512x512
```

## Páginas legadas (não acessíveis pelo menu)
```
forca.html          — Exercícios de segunda (substituído pelo overlay)
ativacao.html       — Exercícios de sexta (substituído pelo overlay)
```
