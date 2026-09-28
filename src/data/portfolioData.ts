import { ProjectItem, ServiceArea, ExperienceItem, ContactInfo } from '../types';

export const initialContactInfo: ContactInfo = {
  telegram: 'https://t.me/olimjonov67',
  email: 'shokirovnrmattllo@gmail.com',
  linkedin: 'https://linkedin.com/in/asilbek-olimjonov',
  github: 'https://github.com/Asilbek11-git',
  location: 'Uzbekistan',
  availability: 'Remote / Open to opportunities',
};

export const technologiesList = [
  'Python',
  'Django',
  'Django REST Framework',
  'Aiogram',
  'Telegram Bot API',
  'PostgreSQL',
  'Redis',
  'Celery',
  'Git',
  'GitHub',
  'Linux',
  'REST API',
  'JWT',
  'WebSocket',
];

export const categorizedSkills = [
  {
    category: {
      en: 'Backend Frameworks & Core',
      uz: 'Backend Freymvorklar va Asosiy',
    },
    items: [
      { name: 'Python', role: 'Primary programming language for all backend and bot applications' },
      { name: 'Django', role: 'Robust MVC backend framework for structured web projects' },
      { name: 'Django REST Framework', role: 'Building clean RESTful APIs, serializers & permission classes' },
    ],
  },
  {
    category: {
      en: 'Telegram Bots & Async',
      uz: 'Telegram Botlar va Asinxronlik',
    },
    items: [
      { name: 'Aiogram', role: 'Modern asynchronous Python framework for Telegram bots' },
      { name: 'Telegram Bot API', role: 'Custom webhooks, polling, inline keyboards & commands' },
      { name: 'WebSocket', role: 'Real-time bidirectional event communication' },
    ],
  },
  {
    category: {
      en: 'Databases, Caching & Queues',
      uz: 'Maʼlumotlar Bazasi, Kesh va Navbatlar',
    },
    items: [
      { name: 'PostgreSQL', role: 'Relational database schema modeling, indexing & complex queries' },
      { name: 'Redis', role: 'Fast in-memory caching and session/message broker' },
      { name: 'Celery', role: 'Asynchronous background task processing & scheduled jobs' },
    ],
  },
  {
    category: {
      en: 'Security, Tools & Infrastructure',
      uz: 'Xavfsizlik, Vositalar va Server',
    },
    items: [
      { name: 'JWT (JSON Web Tokens)', role: 'Stateless token authentication & refresh token flow' },
      { name: 'REST API', role: 'Standardized HTTP endpoints with status codes & validation' },
      { name: 'Git & GitHub', role: 'Version control, repository management & collaboration' },
      { name: 'Linux', role: 'Basic terminal navigation, environment variables & service runs' },
    ],
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    number: '01',
    title: {
      en: 'Django Backend Development',
      uz: 'Django Backend Dasturlash',
    },
    description: {
      en: 'Building scalable web backends with clean models, business logic separation, and organized project structure.',
      uz: 'Strukturalashgan modellar, toza biznes mantiq va tartibli loyiha arxitekturasi bilan backend tizimlarini ishlab chiqish.',
    },
    iconName: 'Server',
  },
  {
    number: '02',
    title: {
      en: 'REST API Development',
      uz: 'REST API Ishlab Chiqish',
    },
    description: {
      en: 'Designing and implementing clean REST endpoints with proper serializers, request validation, error responses, and HTTP status codes.',
      uz: 'Toza serializerlar, soʻrov validatsiyasi, xato holatlari va toʻgʻri HTTP status kodlari bilan REST API yaratish.',
    },
    iconName: 'Code',
  },
  {
    number: '03',
    title: {
      en: 'Telegram Bot Development',
      uz: 'Telegram Bot Dasturlash',
    },
    description: {
      en: 'Developing asynchronous bots using Python and Aiogram with Finite State Machine (FSM), inline menus, and custom commands.',
      uz: 'Python va Aiogram yordamida FSM (Finite State Machine), interaktiv inline tugmalar va asinxron telegram botlar yaratish.',
    },
    iconName: 'Bot',
  },
  {
    number: '04',
    title: {
      en: 'PostgreSQL Integration',
      uz: 'PostgreSQL Integratsiyasi',
    },
    description: {
      en: 'Configuring relational databases, designing ORM models, writing optimized queries, and maintaining schema migrations.',
      uz: 'Relyatsion maʼlumotlar bazalarini sozlash, ORM modellari tuzish, soʻrovlarni optimallashtirish va migratsiyalarni yuritish.',
    },
    iconName: 'Database',
  },
  {
    number: '05',
    title: {
      en: 'Authentication & JWT',
      uz: 'Autentifikatsiya va JWT',
    },
    description: {
      en: 'Implementing secure user registration, token-based authentication (JWT access/refresh tokens), and endpoint permission checks.',
      uz: 'Xavfsiz roʻyxatdan oʻtish, token asosidagi autentifikatsiya (JWT access/refresh) va huquqlarni tekshirishni joriy etish.',
    },
    iconName: 'ShieldCheck',
  },
  {
    number: '06',
    title: {
      en: 'API Integration',
      uz: 'Tashqi API Integratsiyasi',
    },
    description: {
      en: 'Connecting third-party services, handling webhooks, parsing external JSON responses, and managing rate limits gracefully.',
      uz: 'Tashqi xizmatlar bilan bogʻlanish, webhooklarni qabul qilish, JSON javoblarni tahlil qilish va uzluksiz ishlashni taʼminlash.',
    },
    iconName: 'Workflow',
  },
  {
    number: '07',
    title: {
      en: 'Basic Deployment & Linux Server Work',
      uz: 'Linux Server va Deploy Asoslari',
    },
    description: {
      en: 'Setting up applications on Linux servers, configuring systemd services, handling environment variables, and basic process management.',
      uz: 'Linux serverlarda ilovalarni sozlash, systemd xizmatlari, muhit oʻzgaruvchilari (.env) va loyihalarni ishga tushirish.',
    },
    iconName: 'Terminal',
  },
  {
    number: '08',
    title: {
      en: 'Bug Fixing & Improvements',
      uz: 'Xatoliklarni Tuzatish va Yaxshilash',
    },
    description: {
      en: 'Refactoring existing Python backend code, resolving database bottlenecks, and implementing requested feature enhancements.',
      uz: 'Mavjud Python backend kodidagi xatoliklarni aniqlash, refaktoring qilish va yangi funksionallarni qoʻshish.',
    },
    iconName: 'Wrench',
  },
];

export const realProjects: ProjectItem[] = [
  {
    id: 'devteam-2',
    title: 'DevTeam',
    subtitle: 'Django REST API Backend',
    category: 'django',
    githubUrl: 'https://github.com/Asilbek11-git/DevTeam-2',
    description: {
      en: 'A Django-based backend project with REST API, authentication, PostgreSQL and other backend components.',
      uz: 'REST API, autentifikatsiya, PostgreSQL va boshqa backend komponentlariga ega Django loyihasi.',
    },
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'Git'],
    keyFeatures: {
      en: [
        'RESTful API architecture using Django REST Framework',
        'Secure user authentication and token-based authorization (JWT)',
        'PostgreSQL database relational modeling and migrations',
        'Clean serializers for input validation and output formatting',
        'Organized endpoint routing and permission control',
      ],
      uz: [
        'Django REST Framework yordamida RESTful API arxitekturasi',
        'Xavfsiz foydalanuvchi autentifikatsiyasi va JWT tokenli avtorizatsiya',
        'PostgreSQL relieshion maʼlumotlar bazasi modellari va migratsiyalari',
        'Kiruvchi maʼlumotlarni tekshirish uchun toza serializerlar',
        'Tartibli API marshrutlash va ruxsatlarni boshqarish',
      ],
    },
    codeSnippet: {
      filename: 'api/views.py',
      language: 'python',
      code: `from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import TeamSerializer, MemberSerializer
from .models import Team, Member

class TeamListView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        teams = Team.objects.filter(is_active=True).select_related('creator')
        serializer = TeamSerializer(teams, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(creator=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)`,
    },
  },
  {
    id: 'mini-imt',
    title: 'IMT Bot (mini_Imt)',
    subtitle: 'Telegram Health Calculation Bot',
    category: 'telegram',
    githubUrl: 'https://github.com/Asilbek11-git/mini_Imt',
    description: {
      en: 'A Telegram bot developed in Python using the Aiogram framework to calculate Body Mass Index (IMT / BMI) based on user height and weight, providing accurate health guidance categories.',
      uz: 'Foydalanuvchi boʻyi va vazniga qarab Tana Massasi Indeksini (IMT / BMI) hisoblaydigan va sogʻlom tavsiyalar beruvchi Python va Aiogram asosidagi Telegram bot.',
    },
    technologies: ['Python', 'Aiogram', 'Telegram Bot API', 'FSM States', 'Git'],
    keyFeatures: {
      en: [
        'Asynchronous Telegram bot powered by Python and Aiogram',
        'Finite State Machine (FSM) to collect user height and weight step-by-step',
        'Accurate BMI mathematical calculation and medical classification',
        'Interactive inline and reply keyboard interfaces for quick inputs',
        'Clean error handling for invalid numerical inputs and edge cases',
      ],
      uz: [
        'Python va Aiogram kutubxonasiga asoslangan asinxron bot',
        'Foydalanuvchidan boʻy va vazn maʼlumotlarini bosqichma-bosqich olish uchun FSM',
        'BMI (IMT) formulasi boʻyicha aniq hisob-kitob va toifa tavsiyalari',
        'Qulay va interaktiv inline/reply klaviaturalar',
        'Notoʻgʻri kiritilgan raqamlar va xatoliklarni toza ushlab qolish',
      ],
    },
    codeSnippet: {
      filename: 'handlers/imt_calc.py',
      language: 'python',
      code: `from aiogram import types, Dispatcher
from aiogram.dispatcher import FSMContext
from aiogram.dispatcher.filters.state import State, StatesGroup

class IMTStates(StatesGroup):
    waiting_for_weight = State()
    waiting_for_height = State()

async def calculate_imt_result(weight: float, height_cm: float) -> str:
    height_m = height_cm / 100.0
    bmi = round(weight / (height_m ** 2), 1)
    
    if bmi < 18.5:
        category = "Vazn yetishmovchiligi (Underweight)"
    elif 18.5 <= bmi < 25.0:
        category = "Normal vazn (Normal weight)"
    elif 25.0 <= bmi < 30.0:
        category = "Ortiqcha vazn (Overweight)"
    else:
        category = "Semizlik (Obesity)"
        
    return f"Sizning IMT ko'rsatkichingiz: {bmi}\\nHolat: {category}"`,
    },
  },
  {
    id: 'aiogram-bot-solutions',
    title: 'Telegram Bot Architectures',
    subtitle: 'Asynchronous Bots with Aiogram',
    category: 'telegram',
    githubUrl: 'https://github.com/Asilbek11-git',
    description: {
      en: 'A collection of practical Telegram bot implementations built using Aiogram, covering asynchronous event loops, multi-step state management, and database storage.',
      uz: 'Aiogram yordamida yaratilgan amaliy Telegram bot tizimlari: asinxron hodisalar zanjiri, koʻp bosqichli FSM holatlari va maʼlumotlar bazasi integratsiyasi.',
    },
    technologies: ['Python', 'Aiogram', 'Telegram Bot API', 'PostgreSQL', 'SQLite', 'Asyncio'],
    keyFeatures: {
      en: [
        'Asyncio-based non-blocking request and response flow',
        'Custom command routing, filters, and middleware layers',
        'Data storage with PostgreSQL/SQLite for persistent user preferences',
        'Inline callback query handlers and interactive navigation menus',
        'Clean structure separating handlers, states, filters, and database models',
      ],
      uz: [
        'Asyncio asosidagi bloklanmasdan ishlovchi soʻrovlar tizimi',
        'Maxsus komandalar, filtrlar va middleware qatlamlari',
        'Foydalanuvchi maʼlumotlarini saqlash uchun PostgreSQL/SQLite integratsiyasi',
        'Inline callback soʻrovlari va navigatsiya menyulari',
        'Handlerlar, holatlar va modellarni alohida modullarga ajratilgan toza arxitektura',
      ],
    },
    codeSnippet: {
      filename: 'bot_core/main.py',
      language: 'python',
      code: `import asyncio
import logging
from aiogram import Bot, Dispatcher
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from config import BOT_TOKEN

logging.basicConfig(level=logging.INFO)

bot = Bot(token=BOT_TOKEN, parse_mode="HTML")
storage = MemoryStorage()
dp = Dispatcher(bot, storage=storage)

async def main():
    print("Telegram bot ishga tushdi...")
    # Register routers & handlers
    try:
        await dp.start_polling()
    finally:
        await bot.close()

if __name__ == '__main__':
    asyncio.run(main())`,
    },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: 'Current / Ongoing',
    title: {
      en: 'Backend & Telegram Bot Development',
      uz: 'Backend va Telegram Bot Dasturlash',
    },
    focus: {
      en: 'Personal Projects & Practical Development',
      uz: 'Shaxsiy Loyihalar va Amaliy Dasturlash',
    },
    description: {
      en: 'Building and maintaining Python-based web applications, REST APIs, and automated Telegram bots. Practicing clean code principles, database normalization, and asynchronous programming.',
      uz: 'Python asosidagi veb ilovalar, REST API va avtomatlashtirilgan Telegram botlarini ishlab chiqish. Toza kod, maʼlumotlar bazasi va asinxron dasturlashni amalda qoʻllash.',
    },
    deliverables: {
      en: [
        'Developed REST API backend services with Django and Django REST Framework',
        'Implemented database schemas with PostgreSQL and integrated migrations',
        'Created interactive Telegram bots with Aiogram, FSM, and custom keyboards',
        'Integrated JWT token authentication for secure client-server communication',
      ],
      uz: [
        'Django va Django REST Framework bilan REST API xizmatlarini ishlab chiqish',
        'PostgreSQL maʼlumotlar bazasi sxemalarini tuzish va migratsiyalarni boshqarish',
        'Aiogram va FSM yordamida interaktiv Telegram botlarni yaratish',
        'Xavfsiz ulanish uchun JWT token autentifikatsiyasini joriy etish',
      ],
    },
  },
  {
    period: 'Practical Development',
    title: {
      en: 'Freelance & Practical Tasks',
      uz: 'Frilans va Amaliy Vazifalar',
    },
    focus: {
      en: 'Custom Automation & API Solutions',
      uz: 'Maxsus Avtomatlashtirish va API Yechimlari',
    },
    description: {
      en: 'Developing custom automation tools, bot workflows, and backend scripts for clients and personal initiatives. Focused on practical problem solving and direct business requirements.',
      uz: 'Mijozlar va shaxsiy tashabbuslar uchun maxsus avtomatlashtirish vositalari, bot ssenariylari va backend skriptlarini yozish.',
    },
    deliverables: {
      en: [
        'Connected external REST APIs and parsed JSON payload structures',
        'Configured Redis caching and basic task queue processing with Celery',
        'Assisted with Linux VPS setup, environment files, and basic system service operations',
        'Diagnosed bugs, refactored existing logic, and updated dependencies',
      ],
      uz: [
        'Tashqi REST API xizmatlarini ulash va JSON javoblarini qayta ishlash',
        'Redis kesh va Celery bilan fondagi vazifalarni sozlash',
        'Linux VPS sozlamalari, muhit oʻzgaruvchilari va tizim xizmatlari bilan ishlash',
        'Xatoliklarni bartaraf etish va mavjud kodni takomillashtirish',
      ],
    },
  },
];
