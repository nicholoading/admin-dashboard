export interface TeamMember {
  name: string
  ic: string
  gender: string
  race: string
  grade: string
  parentName: string
  parentPhone: string
  parentEmail: string
  size: string
  password: string
}

export interface Team {
  teamName: string
  representingSchool: string
  schoolName: string
  schoolAddress: string
  postalCode: string
  educationLevel: string
  category: string
  city: string
  state: string
  teacherName: string
  teacherEmail: string
  teacherPhone: number
  size: string
  teacherPassword: string
  registrationStatus: "Pending" | "Approved" | "Rejected"
  teamMember1: TeamMember
  teamMember2: TeamMember
  teamMember3: TeamMember
  teacherIC: string
}

export const teamData: Team[] = [
  {
    teamName: "Cyber Warriors",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Mutiara",
    schoolAddress: "Jalan 3, Taman Mutiara",
    postalCode: "56000",
    educationLevel: "secondary",
    category: "senior-html",
    city: "Kuala Lumpur",
    state: "Kuala Lumpur",
    teacherName: "John Tan",
    teacherEmail: "johntan@example.com",
    teacherPhone: 198765432,
    size: "L",
    teacherPassword: "pass1234",
    registrationStatus: "Approved",
    teamMember1: {
      name: "Ali Rahman",
      ic: "920311-08-5678",
      gender: "Male",
      race: "Melayu",
      grade: "Form 3",
      parentName: "Rahman Ahmad",
      parentPhone: "0172345678",
      parentEmail: "rahman.ahmad@example.com",
      size: "M",
      password: "abcd1234",
    },
    teamMember2: {
      name: "Chong Wei",
      ic: "921212-14-2345",
      gender: "Male",
      race: "Cina",
      grade: "Form 2",
      parentName: "Chong Seng",
      parentPhone: "0123456789",
      parentEmail: "chong.seng@example.com",
      size: "L",
      password: "efgh5678",
    },
    teamMember3: {
      name: "Ravi Kumar",
      ic: "930505-10-4567",
      gender: "Male",
      race: "India",
      grade: "Form 1",
      parentName: "Kumar Ramasamy",
      parentPhone: "0187654321",
      parentEmail: "kumar.ramasamy@example.com",
      size: "XL",
      password: "ijkl9012",
    },
    teacherIC: "780102-07-1234",
  },
  {
    teamName: "Code Masters",
    representingSchool: "no",
    schoolName: "",
    schoolAddress: "",
    postalCode: "47000",
    educationLevel: "secondary",
    category: "senior-scratch",
    city: "Petaling Jaya",
    state: "Selangor",
    teacherName: "Lisa Wong",
    teacherEmail: "lisawong@example.com",
    teacherPhone: 182345678,
    size: "M",
    teacherPassword: "pass5678",
    registrationStatus: "Rejected",
    teamMember1: {
      name: "Tan Mei Ling",
      ic: "910312-13-6789",
      gender: "Female",
      race: "Cina",
      grade: "Form 3",
      parentName: "Tan Kai",
      parentPhone: "0178765432",
      parentEmail: "tan.kai@example.com",
      size: "S",
      password: "mnop3456",
    },
    teamMember2: {
      name: "Surya Das",
      ic: "920414-11-7890",
      gender: "Male",
      race: "India",
      grade: "Form 2",
      parentName: "Das Raj",
      parentPhone: "0169876543",
      parentEmail: "das.raj@example.com",
      size: "M",
      password: "qrst6789",
    },
    teamMember3: {
      name: "Syafiq Hamzah",
      ic: "931212-09-8901",
      gender: "Male",
      race: "Melayu",
      grade: "Form 1",
      parentName: "Hamzah Ali",
      parentPhone: "0157654321",
      parentEmail: "hamzah.ali@example.com",
      size: "XL",
      password: "uvwx1234",
    },
    teacherIC: "781010-08-9876",
  },
  {
    teamName: "Tech Titans",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Seri Indah",
    schoolAddress: "Jalan Indah, Taman Indah",
    postalCode: "88000",
    educationLevel: "primary",
    category: "junior-scratch",
    city: "Kota Kinabalu",
    state: "Sabah",
    teacherName: "Ahmad Faisal",
    teacherEmail: "ahmadfaisal@example.com",
    teacherPhone: 193456789,
    size: "S",
    teacherPassword: "pass9012",
    registrationStatus: "Pending",
    teamMember1: {
      name: "Faris Abdullah",
      ic: "920610-12-3456",
      gender: "Male",
      race: "Melayu",
      grade: "Primary 6",
      parentName: "Abdullah Omar",
      parentPhone: "0134567890",
      parentEmail: "abdullah.omar@example.com",
      size: "S",
      password: "abcd9012",
    },
    teamMember2: {
      name: "Lim Siew Mei",
      ic: "930725-04-5678",
      gender: "Female",
      race: "Cina",
      grade: "Primary 5",
      parentName: "Lim Eng",
      parentPhone: "0125678901",
      parentEmail: "lim.eng@example.com",
      size: "M",
      password: "efgh5678",
    },
    teamMember3: {
      name: "Jessica Samuel",
      ic: "940805-06-6789",
      gender: "Female",
      race: "Iban",
      grade: "Primary 4",
      parentName: "Samuel Ting",
      parentPhone: "0116789012",
      parentEmail: "samuel.ting@example.com",
      size: "L",
      password: "ijkl2345",
    },
    teacherIC: "750809-05-2345",
  },
  {
    teamName: "Data Dynamos",
    representingSchool: "yes",
    schoolName: "Sekolah Kebangsaan Taman Maluri",
    schoolAddress: "Jalan Jejaka, Taman Maluri",
    postalCode: "55100",
    educationLevel: "primary",
    category: "junior-html",
    city: "Kuala Lumpur",
    state: "Kuala Lumpur",
    teacherName: "Nurul Huda",
    teacherEmail: "nurulhuda@example.com",
    teacherPhone: 197654321,
    size: "M",
    teacherPassword: "pass5678",
    registrationStatus: "Approved",
    teamMember1: {
      name: "Amir Ismail",
      ic: "920715-14-5678",
      gender: "Male",
      race: "Melayu",
      grade: "Primary 6",
      parentName: "Ismail Abdullah",
      parentPhone: "0123456789",
      parentEmail: "ismail.abdullah@example.com",
      size: "S",
      password: "qwer1234",
    },
    teamMember2: {
      name: "Siti Nurhayati",
      ic: "930820-08-9012",
      gender: "Female",
      race: "Melayu",
      grade: "Primary 5",
      parentName: "Nurhayati Zainuddin",
      parentPhone: "0187654321",
      parentEmail: "nurhayati.zainuddin@example.com",
      size: "XS",
      password: "asdf5678",
    },
    teamMember3: {
      name: "Raj Muthu",
      ic: "940925-10-3456",
      gender: "Male",
      race: "India",
      grade: "Primary 6",
      parentName: "Muthu Raman",
      parentPhone: "0198765432",
      parentEmail: "muthu.raman@example.com",
      size: "M",
      password: "zxcv9012",
    },
    teacherIC: "760615-08-5678",
  },
  {
    teamName: "Johor Geniuses",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Taman Johor Jaya",
    schoolAddress: "Jalan Dedap 18, Taman Johor Jaya",
    postalCode: "81100",
    educationLevel: "secondary",
    category: "senior-html",
    city: "Johor Bahru",
    state: "Johor",
    teacherName: "Tan Mei Ling",
    teacherEmail: "tanmeiling@example.com",
    teacherPhone: 197123456,
    size: "L",
    teacherPassword: "pass7890",
    registrationStatus: "Approved",
    teamMember1: {
      name: "Ahmad Zulkifli",
      ic: "920830-01-5678",
      gender: "Male",
      race: "Melayu",
      grade: "Form 4",
      parentName: "Zulkifli Hassan",
      parentPhone: "0123456789",
      parentEmail: "zulkifli.hassan@example.com",
      size: "M",
      password: "zxcv1234",
    },
    teamMember2: {
      name: "Lee Mei Fen",
      ic: "930915-01-6789",
      gender: "Female",
      race: "Cina",
      grade: "Form 3",
      parentName: "Lee Chong Wei",
      parentPhone: "0134567890",
      parentEmail: "lee.chongwei@example.com",
      size: "S",
      password: "asdf5678",
    },
    teamMember3: {
      name: "Muthu Selvam",
      ic: "941020-01-7890",
      gender: "Male",
      race: "India",
      grade: "Form 4",
      parentName: "Selvam Raju",
      parentPhone: "0145678901",
      parentEmail: "selvam.raju@example.com",
      size: "L",
      password: "qwer9012",
    },
    teacherIC: "770720-01-5678",
  },
  {
    teamName: "Penang Innovators",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Bukit Jambul",
    schoolAddress: "Jalan Bukit Jambul, Bayan Lepas",
    postalCode: "11900",
    educationLevel: "secondary",
    category: "senior-scratch",
    city: "George Town",
    state: "Penang",
    teacherName: "Lim Chee Seng",
    teacherEmail: "limcheeseng@example.com",
    teacherPhone: 194567890,
    size: "M",
    teacherPassword: "pass2345",
    registrationStatus: "Pending",
    teamMember1: {
      name: "Nur Aisyah",
      ic: "921125-07-5678",
      gender: "Female",
      race: "Melayu",
      grade: "Form 5",
      parentName: "Aisyah Zainuddin",
      parentPhone: "0156789012",
      parentEmail: "aisyah.zainuddin@example.com",
      size: "S",
      password: "poiu7890",
    },
    teamMember2: {
      name: "Tan Wei Jie",
      ic: "931230-07-6789",
      gender: "Male",
      race: "Cina",
      grade: "Form 4",
      parentName: "Tan Ah Kow",
      parentPhone: "0167890123",
      parentEmail: "tan.ahkow@example.com",
      size: "M",
      password: "lkjh4567",
    },
    teamMember3: {
      name: "Kavitha Raj",
      ic: "940105-07-7890",
      gender: "Female",
      race: "India",
      grade: "Form 5",
      parentName: "Raj Kumar",
      parentPhone: "0178901234",
      parentEmail: "raj.kumar@example.com",
      size: "S",
      password: "mnbv2345",
    },
    teacherIC: "780825-07-5678",
  },
  {
    teamName: "Perak Prodigies",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Sultan Yussuf",
    schoolAddress: "Jalan Sultan Idris Shah, Ipoh",
    postalCode: "30000",
    educationLevel: "secondary",
    category: "senior-html",
    city: "Ipoh",
    state: "Perak",
    teacherName: "Amirah Zainal",
    teacherEmail: "amirahzainal@example.com",
    teacherPhone: 195678901,
    size: "S",
    teacherPassword: "pass3456",
    registrationStatus: "Approved",
    teamMember1: {
      name: "Azman Hashim",
      ic: "920210-08-5678",
      gender: "Male",
      race: "Melayu",
      grade: "Form 5",
      parentName: "Hashim Abdullah",
      parentPhone: "0189012345",
      parentEmail: "hashim.abdullah@example.com",
      size: "M",
      password: "qazw3456",
    },
    teamMember2: {
      name: "Wong Li Hua",
      ic: "930315-08-6789",
      gender: "Female",
      race: "Cina",
      grade: "Form 4",
      parentName: "Wong Ah Chong",
      parentPhone: "0190123456",
      parentEmail: "wong.ahchong@example.com",
      size: "S",
      password: "wsxe7890",
    },
    teamMember3: {
      name: "Rajesh Kumar",
      ic: "940420-08-7890",
      gender: "Male",
      race: "India",
      grade: "Form 5",
      parentName: "Kumar Patel",
      parentPhone: "0191234567",
      parentEmail: "kumar.patel@example.com",
      size: "L",
      password: "edcr1234",
    },
    teacherIC: "790930-08-5678",
  },
  {
    teamName: "Kelantan Coders",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Sultan Ismail",
    schoolAddress: "Jalan Sultan Yahya Petra, Kota Bharu",
    postalCode: "15000",
    educationLevel: "secondary",
    category: "senior-scratch",
    city: "Kota Bharu",
    state: "Kelantan",
    teacherName: "Nik Aziz Nik Mat",
    teacherEmail: "nikaziz@example.com",
    teacherPhone: 196789012,
    size: "M",
    teacherPassword: "pass4567",
    registrationStatus: "Pending",
    teamMember1: {
      name: "Nik Farah",
      ic: "920525-03-5678",
      gender: "Female",
      race: "Melayu",
      grade: "Form 4",
      parentName: "Nik Hassan",
      parentPhone: "0192345678",
      parentEmail: "nik.hassan@example.com",
      size: "S",
      password: "rfvt5678",
    },
    teamMember2: {
      name: "Lim Kah Seng",
      ic: "930630-03-6789",
      gender: "Male",
      race: "Cina",
      grade: "Form 3",
      parentName: "Lim Ah Beng",
      parentPhone: "0193456789",
      parentEmail: "lim.ahbeng@example.com",
      size: "M",
      password: "tgby6789",
    },
    teamMember3: {
      name: "Siti Aishah",
      ic: "940735-03-7890",
      gender: "Female",
      race: "Melayu",
      grade: "Form 4",
      parentName: "Aishah Abdullah",
      parentPhone: "0194567890",
      parentEmail: "aishah.abdullah@example.com",
      size: "S",
      password: "yhnm7890",
    },
    teacherIC: "801035-03-5678",
  },
  {
    teamName: "Kedah Innovators",
    representingSchool: "yes",
    schoolName: "Sekolah Menengah Kebangsaan Sultan Abdul Halim",
    schoolAddress: "Jalan Langgar, Alor Setar",
    postalCode: "05460",
    educationLevel: "secondary",
    category: "senior-html",
    city: "Alor Setar",
    state: "Kedah",
    teacherName: "Nor Azman Bin Hassan",
    teacherEmail: "norazman@example.com",
    teacherPhone: 197890123,
    size: "L",
    teacherPassword: "pass5678",
    registrationStatus: "Approved",
    teamMember1: {
      name: "Muhammad Amir",
      ic: "920840-02-5678",
      gender: "Male",
      race: "Melayu",
      grade: "Form 5",
      parentName: "Hassan Bin Ali",
      parentPhone: "0195678901",
      parentEmail: "hassan.ali@example.com",
      size: "M",
      password: "ujmn8901",
    },
    teamMember2: {
      name: "Tan Li Mei",
      ic: "930945-02-6789",
      gender: "Female",
      race: "Cina",
      grade: "Form 4",
      parentName: "Tan Ah Seng",
      parentPhone: "0196789012",
      parentEmail: "tan.ahseng@example.com",
      size: "S",
      password: "ik,o9012",
    },
    teamMember3: {
      name: "Kavitha Muniandy",
      ic: "941050-02-7890",
      gender: "Female",
      race: "India",
      grade: "Form 5",
      parentName: "Muniandy Raj",
      parentPhone: "0197890123",
      parentEmail: "muniandy.raj@example.com",
      size: "M",
      password: "ol.p0123",
    },
    teacherIC: "811140-02-5678",
  },
]

