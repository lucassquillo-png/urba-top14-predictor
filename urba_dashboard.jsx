import { useState, useEffect, useMemo } from "react";

const D = [
  // ── 2022 ─────────────────────────────────────────────────
  {id:"22_01_1",t:2022,f:1,d:"2022-03-19",local:"Alumni",pL:22,pV:9,visitante:"San Luis",bL:true,bV:false},
  {id:"22_01_2",t:2022,f:1,d:"2022-03-19",local:"Regatas",pL:18,pV:17,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_01_3",t:2022,f:1,d:"2022-03-19",local:"Hindú",pL:34,pV:29,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_01_4",t:2022,f:1,d:"2022-03-19",local:"Buenos Aires",pL:22,pV:32,visitante:"Pucara",bL:false,bV:false},
  {id:"22_01_5",t:2022,f:1,d:"2022-03-19",local:"SIC",pL:30,pV:36,visitante:"Newman",bL:false,bV:false},
  {id:"22_01_6",t:2022,f:1,d:"2022-03-19",local:"Atl. del Rosario",pL:12,pV:27,visitante:"CUBA",bL:false,bV:true},
  {id:"22_02_1",t:2022,f:2,d:"2022-03-26",local:"Buenos Aires",pL:34,pV:33,visitante:"CASI",bL:false,bV:false},
  {id:"22_02_2",t:2022,f:2,d:"2022-03-26",local:"SIC",pL:30,pV:24,visitante:"San Luis",bL:false,bV:false},
  {id:"22_02_3",t:2022,f:2,d:"2022-03-26",local:"Atl. del Rosario",pL:30,pV:16,visitante:"Pucara",bL:false,bV:false},
  {id:"22_02_4",t:2022,f:2,d:"2022-03-26",local:"Regatas",pL:20,pV:21,visitante:"Newman",bL:false,bV:false},
  {id:"22_02_5",t:2022,f:2,d:"2022-03-26",local:"Hindú",pL:15,pV:6,visitante:"CUBA",bL:false,bV:false},
  {id:"22_02_6",t:2022,f:2,d:"2022-03-26",local:"Los Tilos",pL:7,pV:54,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"22_03_1",t:2022,f:3,d:"2022-04-02",local:"CUBA",pL:31,pV:17,visitante:"Pucara",bL:true,bV:false},
  {id:"22_03_2",t:2022,f:3,d:"2022-04-02",local:"Belgrano Ath.",pL:44,pV:13,visitante:"San Luis",bL:true,bV:false},
  {id:"22_03_3",t:2022,f:3,d:"2022-04-02",local:"Los Tilos",pL:32,pV:15,visitante:"CASI",bL:true,bV:false},
  {id:"22_03_4",t:2022,f:3,d:"2022-04-02",local:"Hindú",pL:27,pV:21,visitante:"Alumni",bL:false,bV:false},
  {id:"22_03_5",t:2022,f:3,d:"2022-04-02",local:"Regatas",pL:21,pV:16,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_03_6",t:2022,f:3,d:"2022-04-02",local:"Atl. del Rosario",pL:16,pV:41,visitante:"SIC",bL:false,bV:true},
  {id:"22_04_1",t:2022,f:4,d:"2022-04-09",local:"Buenos Aires",pL:19,pV:12,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_04_2",t:2022,f:4,d:"2022-04-09",local:"Newman",pL:23,pV:16,visitante:"CUBA",bL:false,bV:false},
  {id:"22_04_3",t:2022,f:4,d:"2022-04-09",local:"Alumni",pL:29,pV:17,visitante:"Regatas",bL:false,bV:false},
  {id:"22_04_4",t:2022,f:4,d:"2022-04-09",local:"CASI",pL:13,pV:49,visitante:"Hindú",bL:false,bV:true},
  {id:"22_04_5",t:2022,f:4,d:"2022-04-09",local:"San Luis",pL:17,pV:3,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_04_6",t:2022,f:4,d:"2022-04-09",local:"Pucara",pL:29,pV:26,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_05_1",t:2022,f:5,d:"2022-04-23",local:"Belgrano Ath.",pL:30,pV:38,visitante:"Newman",bL:false,bV:false},
  {id:"22_05_2",t:2022,f:5,d:"2022-04-23",local:"Los Tilos",pL:17,pV:34,visitante:"Pucara",bL:false,bV:true},
  {id:"22_05_3",t:2022,f:5,d:"2022-04-23",local:"Hindú",pL:45,pV:8,visitante:"San Luis",bL:true,bV:false},
  {id:"22_05_4",t:2022,f:5,d:"2022-04-23",local:"Regatas",pL:30,pV:16,visitante:"CASI",bL:false,bV:false},
  {id:"22_05_5",t:2022,f:5,d:"2022-04-23",local:"Atl. del Rosario",pL:37,pV:37,visitante:"Alumni",bL:false,bV:false},
  {id:"22_05_6",t:2022,f:5,d:"2022-04-23",local:"SIC",pL:40,pV:17,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"22_06_1",t:2022,f:6,d:"2022-04-30",local:"Alumni",pL:23,pV:39,visitante:"SIC",bL:false,bV:true},
  {id:"22_06_2",t:2022,f:6,d:"2022-04-30",local:"CASI",pL:26,pV:26,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_06_3",t:2022,f:6,d:"2022-04-30",local:"San Luis",pL:29,pV:18,visitante:"Regatas",bL:false,bV:false},
  {id:"22_06_4",t:2022,f:6,d:"2022-04-30",local:"Pucara",pL:19,pV:68,visitante:"Hindú",bL:false,bV:true},
  {id:"22_06_5",t:2022,f:6,d:"2022-04-30",local:"Newman",pL:40,pV:24,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_06_6",t:2022,f:6,d:"2022-04-30",local:"CUBA",pL:29,pV:10,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_07_1",t:2022,f:7,d:"2022-05-07",local:"Los Tilos",pL:3,pV:40,visitante:"CUBA",bL:false,bV:true},
  {id:"22_07_2",t:2022,f:7,d:"2022-05-07",local:"Hindú",pL:35,pV:29,visitante:"Newman",bL:false,bV:false},
  {id:"22_07_3",t:2022,f:7,d:"2022-05-07",local:"Regatas",pL:25,pV:3,visitante:"Pucara",bL:true,bV:false},
  {id:"22_07_4",t:2022,f:7,d:"2022-05-07",local:"Atl. del Rosario",pL:41,pV:36,visitante:"San Luis",bL:false,bV:false},
  {id:"22_07_5",t:2022,f:7,d:"2022-05-07",local:"SIC",pL:28,pV:29,visitante:"CASI",bL:false,bV:false},
  {id:"22_07_6",t:2022,f:7,d:"2022-05-07",local:"Buenos Aires",pL:24,pV:21,visitante:"Alumni",bL:false,bV:false},
  {id:"22_08_1",t:2022,f:8,d:"2022-05-14",local:"CASI",pL:20,pV:49,visitante:"Buenos Aires",bL:false,bV:true},
  {id:"22_08_2",t:2022,f:8,d:"2022-05-14",local:"San Luis",pL:15,pV:13,visitante:"SIC",bL:false,bV:false},
  {id:"22_08_3",t:2022,f:8,d:"2022-05-14",local:"Pucara",pL:33,pV:33,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_08_4",t:2022,f:8,d:"2022-05-14",local:"Newman",pL:25,pV:19,visitante:"Regatas",bL:false,bV:false},
  {id:"22_08_5",t:2022,f:8,d:"2022-05-14",local:"CUBA",pL:15,pV:24,visitante:"Hindú",bL:false,bV:false},
  {id:"22_08_6",t:2022,f:8,d:"2022-05-14",local:"Belgrano Ath.",pL:61,pV:7,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_09_1",t:2022,f:9,d:"2022-05-28",local:"Hindú",pL:20,pV:18,visitante:"Belgrano Ath.",bL:true,bV:false},
  {id:"22_09_2",t:2022,f:9,d:"2022-05-28",local:"Alumni",pL:41,pV:17,visitante:"CASI",bL:true,bV:false},
  {id:"22_09_3",t:2022,f:9,d:"2022-05-28",local:"Regatas",pL:36,pV:7,visitante:"CUBA",bL:true,bV:false},
  {id:"22_09_4",t:2022,f:9,d:"2022-05-28",local:"Atl. del Rosario",pL:35,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"22_09_5",t:2022,f:9,d:"2022-05-28",local:"SIC",pL:18,pV:15,visitante:"Pucara",bL:false,bV:false},
  {id:"22_09_6",t:2022,f:9,d:"2022-05-28",local:"Buenos Aires",pL:28,pV:14,visitante:"San Luis",bL:false,bV:false},
  {id:"22_10_1",t:2022,f:10,d:"2022-06-04",local:"Los Tilos",pL:30,pV:5,visitante:"Regatas",bL:false,bV:false},
  {id:"22_10_2",t:2022,f:10,d:"2022-06-04",local:"Belgrano Ath.",pL:23,pV:21,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_10_3",t:2022,f:10,d:"2022-06-04",local:"CUBA",pL:7,pV:30,visitante:"SIC",bL:false,bV:false},
  {id:"22_10_4",t:2022,f:10,d:"2022-06-04",local:"Newman",pL:41,pV:11,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"22_10_5",t:2022,f:10,d:"2022-06-04",local:"Pucara",pL:19,pV:21,visitante:"Alumni",bL:false,bV:false},
  {id:"22_10_6",t:2022,f:10,d:"2022-06-04",local:"San Luis",pL:9,pV:19,visitante:"CASI",bL:false,bV:false},
  {id:"22_11_1",t:2022,f:11,d:"2022-06-11",local:"CASI",pL:48,pV:24,visitante:"Pucara",bL:true,bV:false},
  {id:"22_11_2",t:2022,f:11,d:"2022-06-11",local:"Alumni",pL:8,pV:29,visitante:"Newman",bL:false,bV:true},
  {id:"22_11_3",t:2022,f:11,d:"2022-06-11",local:"Buenos Aires",pL:22,pV:43,visitante:"CUBA",bL:false,bV:true},
  {id:"22_11_4",t:2022,f:11,d:"2022-06-11",local:"SIC",pL:21,pV:20,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_11_5",t:2022,f:11,d:"2022-06-11",local:"Atl. del Rosario",pL:28,pV:7,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_11_6",t:2022,f:11,d:"2022-06-11",local:"Regatas",pL:20,pV:27,visitante:"Hindú",bL:false,bV:false},
  {id:"22_12_1",t:2022,f:12,d:"2022-06-25",local:"Hindú",pL:34,pV:25,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"22_12_2",t:2022,f:12,d:"2022-06-25",local:"Los Tilos",pL:12,pV:33,visitante:"SIC",bL:false,bV:true},
  {id:"22_12_3",t:2022,f:12,d:"2022-06-25",local:"Belgrano Ath.",pL:29,pV:17,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_12_4",t:2022,f:12,d:"2022-06-25",local:"CUBA",pL:7,pV:21,visitante:"Alumni",bL:false,bV:false},
  {id:"22_12_5",t:2022,f:12,d:"2022-06-25",local:"Newman",pL:28,pV:3,visitante:"CASI",bL:true,bV:false},
  {id:"22_12_6",t:2022,f:12,d:"2022-06-25",local:"Pucara",pL:27,pV:37,visitante:"San Luis",bL:false,bV:false},
  {id:"22_13_1",t:2022,f:13,d:"2022-07-02",local:"San Luis",pL:7,pV:20,visitante:"Newman",bL:false,bV:false},
  {id:"22_13_2",t:2022,f:13,d:"2022-07-02",local:"CASI",pL:37,pV:38,visitante:"CUBA",bL:false,bV:false},
  {id:"22_13_3",t:2022,f:13,d:"2022-07-02",local:"Alumni",pL:34,pV:23,visitante:"Belgrano Ath.",bL:true,bV:false},
  {id:"22_13_4",t:2022,f:13,d:"2022-07-02",local:"Buenos Aires",pL:30,pV:24,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_13_5",t:2022,f:13,d:"2022-07-02",local:"SIC",pL:25,pV:12,visitante:"Hindú",bL:false,bV:false},
  {id:"22_13_6",t:2022,f:13,d:"2022-07-02",local:"Atl. del Rosario",pL:41,pV:37,visitante:"Regatas",bL:false,bV:false},
  {id:"22_14_1",t:2022,f:14,d:"2022-07-09",local:"Regatas",pL:19,pV:22,visitante:"SIC",bL:false,bV:false},
  {id:"22_14_2",t:2022,f:14,d:"2022-07-09",local:"Hindú",pL:27,pV:26,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_14_3",t:2022,f:14,d:"2022-07-09",local:"Los Tilos",pL:28,pV:30,visitante:"Alumni",bL:false,bV:false},
  {id:"22_14_4",t:2022,f:14,d:"2022-07-09",local:"Belgrano Ath.",pL:37,pV:28,visitante:"CASI",bL:false,bV:false},
  {id:"22_14_5",t:2022,f:14,d:"2022-07-09",local:"CUBA",pL:42,pV:30,visitante:"San Luis",bL:false,bV:false},
  {id:"22_14_6",t:2022,f:14,d:"2022-07-09",local:"Newman",pL:60,pV:24,visitante:"Pucara",bL:true,bV:false},
  {id:"22_15_1",t:2022,f:15,d:"2022-07-16",local:"Pucara",pL:23,pV:24,visitante:"CUBA",bL:false,bV:false},
  {id:"22_15_2",t:2022,f:15,d:"2022-07-16",local:"San Luis",pL:30,pV:22,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_15_3",t:2022,f:15,d:"2022-07-16",local:"CASI",pL:43,pV:40,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_15_4",t:2022,f:15,d:"2022-07-16",local:"Alumni",pL:15,pV:29,visitante:"Hindú",bL:false,bV:false},
  {id:"22_15_5",t:2022,f:15,d:"2022-07-16",local:"Buenos Aires",pL:27,pV:28,visitante:"Regatas",bL:false,bV:false},
  {id:"22_15_6",t:2022,f:15,d:"2022-07-16",local:"SIC",pL:23,pV:43,visitante:"Atl. del Rosario",bL:false,bV:true},
  {id:"22_16_1",t:2022,f:16,d:"2022-07-23",local:"Atl. del Rosario",pL:38,pV:34,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_16_2",t:2022,f:16,d:"2022-07-23",local:"Regatas",pL:10,pV:25,visitante:"Alumni",bL:false,bV:false},
  {id:"22_16_3",t:2022,f:16,d:"2022-07-23",local:"Hindú",pL:50,pV:36,visitante:"CASI",bL:false,bV:false},
  {id:"22_16_4",t:2022,f:16,d:"2022-07-23",local:"Los Tilos",pL:21,pV:12,visitante:"San Luis",bL:false,bV:false},
  {id:"22_16_5",t:2022,f:16,d:"2022-07-23",local:"Belgrano Ath.",pL:39,pV:28,visitante:"Pucara",bL:false,bV:false},
  {id:"22_16_6",t:2022,f:16,d:"2022-07-23",local:"CUBA",pL:39,pV:25,visitante:"Newman",bL:false,bV:false},
  {id:"22_17_1",t:2022,f:17,d:"2022-08-06",local:"Newman",pL:43,pV:26,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_17_2",t:2022,f:17,d:"2022-08-06",local:"Pucara",pL:45,pV:17,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_17_3",t:2022,f:17,d:"2022-08-06",local:"San Luis",pL:17,pV:32,visitante:"Hindú",bL:false,bV:false},
  {id:"22_17_4",t:2022,f:17,d:"2022-08-06",local:"CASI",pL:44,pV:25,visitante:"Regatas",bL:false,bV:false},
  {id:"22_17_5",t:2022,f:17,d:"2022-08-06",local:"Alumni",pL:26,pV:14,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_17_6",t:2022,f:17,d:"2022-08-06",local:"Buenos Aires",pL:17,pV:27,visitante:"SIC",bL:false,bV:false},
  {id:"22_18_1",t:2022,f:18,d:"2022-08-13",local:"SIC",pL:35,pV:17,visitante:"Alumni",bL:false,bV:false},
  {id:"22_18_2",t:2022,f:18,d:"2022-08-13",local:"Los Tilos",pL:13,pV:52,visitante:"Newman",bL:false,bV:true},
  {id:"22_18_3",t:2022,f:18,d:"2022-08-13",local:"Belgrano Ath.",pL:21,pV:29,visitante:"CUBA",bL:false,bV:false},
  {id:"22_18_4",t:2022,f:18,d:"2022-08-13",local:"Atl. del Rosario",pL:28,pV:35,visitante:"CASI",bL:false,bV:false},
  {id:"22_18_5",t:2022,f:18,d:"2022-08-13",local:"Regatas",pL:5,pV:20,visitante:"San Luis",bL:false,bV:false},
  {id:"22_18_6",t:2022,f:18,d:"2022-08-13",local:"Hindú",pL:41,pV:30,visitante:"Pucara",bL:true,bV:false},
  {id:"22_19_1",t:2022,f:19,d:"2022-08-20",local:"CUBA",pL:32,pV:17,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_19_2",t:2022,f:19,d:"2022-08-20",local:"Pucara",pL:36,pV:23,visitante:"Regatas",bL:false,bV:false},
  {id:"22_19_3",t:2022,f:19,d:"2022-08-20",local:"San Luis",pL:26,pV:36,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_19_4",t:2022,f:19,d:"2022-08-20",local:"CASI",pL:23,pV:25,visitante:"SIC",bL:false,bV:false},
  {id:"22_19_5",t:2022,f:19,d:"2022-08-20",local:"Alumni",pL:31,pV:20,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"22_19_6",t:2022,f:19,d:"2022-08-20",local:"Newman",pL:19,pV:38,visitante:"Hindú",bL:false,bV:true},
  {id:"22_20_1",t:2022,f:20,d:"2022-08-27",local:"Belgrano Ath.",pL:33,pV:27,visitante:"Hindú",bL:false,bV:false},
  {id:"22_20_2",t:2022,f:20,d:"2022-08-27",local:"Pucara",pL:27,pV:34,visitante:"SIC",bL:false,bV:false},
  {id:"22_20_3",t:2022,f:20,d:"2022-08-27",local:"San Luis",pL:28,pV:30,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_20_4",t:2022,f:20,d:"2022-08-27",local:"CASI",pL:23,pV:37,visitante:"Alumni",bL:false,bV:false},
  {id:"22_20_5",t:2022,f:20,d:"2022-08-27",local:"CUBA",pL:40,pV:14,visitante:"Regatas",bL:true,bV:false},
  {id:"22_20_6",t:2022,f:20,d:"2022-08-27",local:"Newman",pL:44,pV:27,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"22_21_1",t:2022,f:21,d:"2022-09-03",local:"San Luis",pL:21,pV:16,visitante:"Alumni",bL:false,bV:false},
  {id:"22_21_2",t:2022,f:21,d:"2022-09-03",local:"Pucara",pL:25,pV:27,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_21_3",t:2022,f:21,d:"2022-09-03",local:"Newman",pL:17,pV:10,visitante:"SIC",bL:false,bV:false},
  {id:"22_21_4",t:2022,f:21,d:"2022-09-03",local:"CUBA",pL:32,pV:29,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_21_5",t:2022,f:21,d:"2022-09-03",local:"Belgrano Ath.",pL:48,pV:5,visitante:"Regatas",bL:true,bV:false},
  {id:"22_21_6",t:2022,f:21,d:"2022-09-03",local:"Los Tilos",pL:32,pV:34,visitante:"Hindú",bL:false,bV:false},
  {id:"22_22_1",t:2022,f:22,d:"2022-09-10",local:"Regatas",pL:14,pV:25,visitante:"Los Tilos",bL:false,bV:false},
  {id:"22_22_2",t:2022,f:22,d:"2022-09-10",local:"Atl. del Rosario",pL:17,pV:18,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_22_3",t:2022,f:22,d:"2022-09-10",local:"SIC",pL:34,pV:16,visitante:"CUBA",bL:true,bV:false},
  {id:"22_22_4",t:2022,f:22,d:"2022-09-10",local:"Buenos Aires",pL:16,pV:19,visitante:"Newman",bL:false,bV:false},
  {id:"22_22_5",t:2022,f:22,d:"2022-09-10",local:"Alumni",pL:49,pV:15,visitante:"Pucara",bL:true,bV:false},
  {id:"22_22_6",t:2022,f:22,d:"2022-09-10",local:"CASI",pL:25,pV:23,visitante:"San Luis",bL:false,bV:false},
  {id:"22_23_1",t:2022,f:23,d:"2022-09-24",local:"Pucara",pL:16,pV:9,visitante:"CASI",bL:false,bV:false},
  {id:"22_23_2",t:2022,f:23,d:"2022-09-24",local:"Newman",pL:27,pV:18,visitante:"Alumni",bL:false,bV:false},
  {id:"22_23_3",t:2022,f:23,d:"2022-09-24",local:"CUBA",pL:42,pV:14,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"22_23_4",t:2022,f:23,d:"2022-09-24",local:"Los Tilos",pL:18,pV:20,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_23_5",t:2022,f:23,d:"2022-09-24",local:"Belgrano Ath.",pL:24,pV:25,visitante:"SIC",bL:false,bV:false},
  {id:"22_23_6",t:2022,f:23,d:"2022-09-24",local:"Hindú",pL:29,pV:7,visitante:"Regatas",bL:true,bV:false},
  {id:"22_24_1",t:2022,f:24,d:"2022-10-01",local:"Atl. del Rosario",pL:27,pV:33,visitante:"Hindú",bL:false,bV:false},
  {id:"22_24_2",t:2022,f:24,d:"2022-10-01",local:"SIC",pL:48,pV:10,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_24_3",t:2022,f:24,d:"2022-10-01",local:"Buenos Aires",pL:22,pV:22,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"22_24_4",t:2022,f:24,d:"2022-10-01",local:"Alumni",pL:23,pV:21,visitante:"CUBA",bL:false,bV:false},
  {id:"22_24_5",t:2022,f:24,d:"2022-10-01",local:"CASI",pL:37,pV:36,visitante:"Newman",bL:false,bV:false},
  {id:"22_24_6",t:2022,f:24,d:"2022-10-01",local:"San Luis",pL:14,pV:8,visitante:"Pucara",bL:false,bV:false},
  {id:"22_25_1",t:2022,f:25,d:"2022-10-08",local:"Newman",pL:56,pV:5,visitante:"San Luis",bL:true,bV:false},
  {id:"22_25_2",t:2022,f:25,d:"2022-10-08",local:"Belgrano Ath.",pL:22,pV:36,visitante:"Alumni",bL:false,bV:false},
  {id:"22_25_3",t:2022,f:25,d:"2022-10-08",local:"Los Tilos",pL:35,pV:36,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"22_25_4",t:2022,f:25,d:"2022-10-08",local:"Hindú",pL:35,pV:24,visitante:"SIC",bL:false,bV:false},
  {id:"22_25_5",t:2022,f:25,d:"2022-10-08",local:"Regatas",pL:24,pV:42,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"22_25_6",t:2022,f:25,d:"2022-10-08",local:"CUBA",pL:31,pV:8,visitante:"CASI",bL:true,bV:false},
  {id:"22_26_1",t:2022,f:26,d:"2022-10-15",local:"SIC",pL:19,pV:23,visitante:"Regatas",bL:false,bV:false},
  {id:"22_26_2",t:2022,f:26,d:"2022-10-15",local:"Buenos Aires",pL:27,pV:29,visitante:"Hindú",bL:false,bV:false},
  {id:"22_26_3",t:2022,f:26,d:"2022-10-15",local:"Alumni",pL:56,pV:19,visitante:"Los Tilos",bL:true,bV:false},
  {id:"22_26_4",t:2022,f:26,d:"2022-10-15",local:"CASI",pL:13,pV:34,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"22_26_5",t:2022,f:26,d:"2022-10-15",local:"San Luis",pL:24,pV:35,visitante:"CUBA",bL:false,bV:false},
  {id:"22_26_6",t:2022,f:26,d:"2022-10-15",local:"Pucara",pL:13,pV:13,visitante:"Newman",bL:false,bV:false},
  // ── 2023 ─────────────────────────────────────────────────
  {id:"23_01_1",t:2023,f:1,d:"2023-03-25",local:"Hindú",pL:15,pV:6,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_01_2",t:2023,f:1,d:"2023-03-25",local:"SIC",pL:28,pV:29,visitante:"Alumni",bL:false,bV:false},
  {id:"23_01_3",t:2023,f:1,d:"2023-03-25",local:"La Plata",pL:19,pV:10,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_01_4",t:2023,f:1,d:"2023-03-25",local:"San Luis",pL:42,pV:34,visitante:"Belgrano Ath.",bL:true,bV:true},
  {id:"23_01_5",t:2023,f:1,d:"2023-03-25",local:"CASI",pL:17,pV:33,visitante:"Newman",bL:false,bV:false},
  {id:"23_01_6",t:2023,f:1,d:"2023-03-25",local:"Pucara",pL:17,pV:54,visitante:"CUBA",bL:false,bV:true},
  {id:"23_02_1",t:2023,f:2,d:"2023-04-01",local:"Pucara",pL:12,pV:40,visitante:"Hindú",bL:false,bV:true},
  {id:"23_02_2",t:2023,f:2,d:"2023-04-01",local:"CUBA",pL:22,pV:29,visitante:"CASI",bL:false,bV:false},
  {id:"23_02_3",t:2023,f:2,d:"2023-04-01",local:"Newman",pL:34,pV:25,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"23_02_4",t:2023,f:2,d:"2023-04-01",local:"San Luis",pL:18,pV:30,visitante:"SIC",bL:false,bV:false},
  {id:"23_02_5",t:2023,f:2,d:"2023-04-01",local:"Alumni",pL:29,pV:31,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_02_6",t:2023,f:2,d:"2023-04-01",local:"Belgrano Ath.",pL:38,pV:31,visitante:"La Plata",bL:false,bV:false},
  {id:"23_03_1",t:2023,f:3,d:"2023-04-15",local:"Hindú",pL:15,pV:17,visitante:"Alumni",bL:false,bV:false},
  {id:"23_03_2",t:2023,f:3,d:"2023-04-15",local:"Buenos Aires",pL:20,pV:9,visitante:"San Luis",bL:false,bV:false},
  {id:"23_03_3",t:2023,f:3,d:"2023-04-15",local:"SIC",pL:25,pV:25,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_03_4",t:2023,f:3,d:"2023-04-15",local:"La Plata",pL:24,pV:26,visitante:"Newman",bL:false,bV:false},
  {id:"23_03_5",t:2023,f:3,d:"2023-04-15",local:"Atl. del Rosario",pL:31,pV:28,visitante:"CUBA",bL:false,bV:false},
  {id:"23_03_6",t:2023,f:3,d:"2023-04-15",local:"CASI",pL:34,pV:29,visitante:"Pucara",bL:false,bV:false},
  {id:"23_04_1",t:2023,f:4,d:"2023-04-22",local:"CASI",pL:16,pV:52,visitante:"Hindú",bL:false,bV:true},
  {id:"23_04_2",t:2023,f:4,d:"2023-04-22",local:"Pucara",pL:26,pV:30,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_04_3",t:2023,f:4,d:"2023-04-22",local:"CUBA",pL:61,pV:30,visitante:"La Plata",bL:true,bV:false},
  {id:"23_04_4",t:2023,f:4,d:"2023-04-22",local:"Belgrano Ath.",pL:41,pV:19,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"23_04_5",t:2023,f:4,d:"2023-04-22",local:"San Luis",pL:25,pV:26,visitante:"Alumni",bL:false,bV:false},
  {id:"23_04_6",t:2023,f:4,d:"2023-04-22",local:"Newman",pL:19,pV:15,visitante:"SIC",bL:false,bV:false},
  {id:"23_05_1",t:2023,f:5,d:"2023-04-29",local:"Hindú",pL:29,pV:20,visitante:"San Luis",bL:false,bV:false},
  {id:"23_05_2",t:2023,f:5,d:"2023-04-29",local:"Alumni",pL:33,pV:17,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_05_3",t:2023,f:5,d:"2023-04-29",local:"Buenos Aires",pL:21,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"23_05_4",t:2023,f:5,d:"2023-04-29",local:"SIC",pL:25,pV:31,visitante:"CUBA",bL:false,bV:true},
  {id:"23_05_5",t:2023,f:5,d:"2023-04-29",local:"La Plata",pL:38,pV:17,visitante:"Pucara",bL:true,bV:false},
  {id:"23_05_6",t:2023,f:5,d:"2023-04-29",local:"Atl. del Rosario",pL:28,pV:20,visitante:"CASI",bL:false,bV:false},
  {id:"23_06_1",t:2023,f:6,d:"2023-05-06",local:"Atl. del Rosario",pL:36,pV:19,visitante:"Hindú",bL:false,bV:false},
  {id:"23_06_2",t:2023,f:6,d:"2023-05-06",local:"CASI",pL:26,pV:20,visitante:"La Plata",bL:false,bV:false},
  {id:"23_06_3",t:2023,f:6,d:"2023-05-06",local:"Pucara",pL:3,pV:48,visitante:"SIC",bL:false,bV:true},
  {id:"23_06_4",t:2023,f:6,d:"2023-05-06",local:"CUBA",pL:27,pV:27,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_06_5",t:2023,f:6,d:"2023-05-06",local:"Newman",pL:27,pV:29,visitante:"Alumni",bL:false,bV:false},
  {id:"23_06_6",t:2023,f:6,d:"2023-05-06",local:"Belgrano Ath.",pL:33,pV:29,visitante:"San Luis",bL:false,bV:false},
  {id:"23_07_1",t:2023,f:7,d:"2023-05-13",local:"Hindú",pL:21,pV:14,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_07_2",t:2023,f:7,d:"2023-05-13",local:"San Luis",pL:16,pV:46,visitante:"Newman",bL:false,bV:true},
  {id:"23_07_3",t:2023,f:7,d:"2023-05-13",local:"Alumni",pL:19,pV:24,visitante:"CUBA",bL:false,bV:false},
  {id:"23_07_4",t:2023,f:7,d:"2023-05-13",local:"Buenos Aires",pL:40,pV:10,visitante:"Pucara",bL:true,bV:false},
  {id:"23_07_5",t:2023,f:7,d:"2023-05-13",local:"SIC",pL:25,pV:36,visitante:"CASI",bL:false,bV:false},
  {id:"23_07_6",t:2023,f:7,d:"2023-05-13",local:"La Plata",pL:29,pV:15,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_08_1",t:2023,f:8,d:"2023-05-20",local:"La Plata",pL:27,pV:22,visitante:"Hindú",bL:false,bV:false},
  {id:"23_08_2",t:2023,f:8,d:"2023-05-20",local:"Atl. del Rosario",pL:12,pV:38,visitante:"SIC",bL:false,bV:true},
  {id:"23_08_3",t:2023,f:8,d:"2023-05-20",local:"CASI",pL:28,pV:30,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_08_4",t:2023,f:8,d:"2023-05-20",local:"Pucara",pL:18,pV:27,visitante:"Alumni",bL:false,bV:false},
  {id:"23_08_5",t:2023,f:8,d:"2023-05-20",local:"CUBA",pL:34,pV:22,visitante:"San Luis",bL:false,bV:false},
  {id:"23_08_6",t:2023,f:8,d:"2023-05-20",local:"Newman",pL:24,pV:34,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_09_1",t:2023,f:9,d:"2023-06-03",local:"Hindú",pL:29,pV:34,visitante:"Newman",bL:false,bV:false},
  {id:"23_09_2",t:2023,f:9,d:"2023-06-03",local:"Belgrano Ath.",pL:38,pV:37,visitante:"CUBA",bL:false,bV:false},
  {id:"23_09_3",t:2023,f:9,d:"2023-06-03",local:"San Luis",pL:43,pV:15,visitante:"Pucara",bL:false,bV:false},
  {id:"23_09_4",t:2023,f:9,d:"2023-06-03",local:"Alumni",pL:36,pV:13,visitante:"CASI",bL:true,bV:false},
  {id:"23_09_5",t:2023,f:9,d:"2023-06-03",local:"Buenos Aires",pL:38,pV:32,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_09_6",t:2023,f:9,d:"2023-06-03",local:"SIC",pL:35,pV:31,visitante:"La Plata",bL:false,bV:false},
  {id:"23_10_1",t:2023,f:10,d:"2023-06-10",local:"SIC",pL:44,pV:23,visitante:"Hindú",bL:true,bV:false},
  {id:"23_10_2",t:2023,f:10,d:"2023-06-10",local:"La Plata",pL:22,pV:25,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_10_3",t:2023,f:10,d:"2023-06-10",local:"Atl. del Rosario",pL:32,pV:40,visitante:"Alumni",bL:false,bV:false},
  {id:"23_10_4",t:2023,f:10,d:"2023-06-10",local:"Pucara",pL:14,pV:39,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_10_5",t:2023,f:10,d:"2023-06-10",local:"CUBA",pL:19,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"23_10_6",t:2023,f:10,d:"2023-06-10",local:"CASI",pL:30,pV:20,visitante:"San Luis",bL:false,bV:false},
  {id:"23_11_1",t:2023,f:11,d:"2023-06-24",local:"Hindú",pL:32,pV:10,visitante:"CUBA",bL:true,bV:false},
  {id:"23_11_2",t:2023,f:11,d:"2023-06-24",local:"Newman",pL:47,pV:26,visitante:"Pucara",bL:true,bV:false},
  {id:"23_11_3",t:2023,f:11,d:"2023-06-24",local:"Belgrano Ath.",pL:31,pV:31,visitante:"CASI",bL:false,bV:false},
  {id:"23_11_4",t:2023,f:11,d:"2023-06-24",local:"San Luis",pL:24,pV:32,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_11_5",t:2023,f:11,d:"2023-06-24",local:"Alumni",pL:28,pV:21,visitante:"La Plata",bL:false,bV:false},
  {id:"23_11_6",t:2023,f:11,d:"2023-06-24",local:"Buenos Aires",pL:22,pV:36,visitante:"SIC",bL:false,bV:true},
  {id:"23_12_1",t:2023,f:12,d:"2023-07-01",local:"Buenos Aires",pL:24,pV:25,visitante:"Hindú",bL:false,bV:false},
  {id:"23_12_2",t:2023,f:12,d:"2023-07-01",local:"Alumni",pL:5,pV:25,visitante:"SIC",bL:false,bV:false},
  {id:"23_12_3",t:2023,f:12,d:"2023-07-01",local:"San Luis",pL:19,pV:3,visitante:"La Plata",bL:false,bV:false},
  {id:"23_12_4",t:2023,f:12,d:"2023-07-01",local:"Belgrano Ath.",pL:35,pV:30,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_12_5",t:2023,f:12,d:"2023-07-01",local:"Newman",pL:41,pV:33,visitante:"CASI",bL:true,bV:false},
  {id:"23_12_6",t:2023,f:12,d:"2023-07-01",local:"CUBA",pL:51,pV:19,visitante:"Pucara",bL:true,bV:false},
  {id:"23_13_1",t:2023,f:13,d:"2023-07-15",local:"Hindú",pL:57,pV:18,visitante:"Pucara",bL:true,bV:false},
  {id:"23_13_2",t:2023,f:13,d:"2023-07-15",local:"CASI",pL:30,pV:27,visitante:"CUBA",bL:false,bV:false},
  {id:"23_13_3",t:2023,f:13,d:"2023-07-15",local:"Atl. del Rosario",pL:33,pV:43,visitante:"Newman",bL:false,bV:false},
  {id:"23_13_4",t:2023,f:13,d:"2023-07-15",local:"SIC",pL:57,pV:5,visitante:"San Luis",bL:true,bV:false},
  {id:"23_13_5",t:2023,f:13,d:"2023-07-15",local:"Buenos Aires",pL:18,pV:20,visitante:"Alumni",bL:false,bV:false},
  {id:"23_13_6",t:2023,f:13,d:"2023-07-15",local:"La Plata",pL:26,pV:27,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_14_1",t:2023,f:14,d:"2023-07-22",local:"Alumni",pL:23,pV:20,visitante:"Hindú",bL:false,bV:false},
  {id:"23_14_2",t:2023,f:14,d:"2023-07-22",local:"San Luis",pL:34,pV:23,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_14_3",t:2023,f:14,d:"2023-07-22",local:"Belgrano Ath.",pL:17,pV:37,visitante:"SIC",bL:false,bV:false},
  {id:"23_14_4",t:2023,f:14,d:"2023-07-22",local:"Newman",pL:33,pV:17,visitante:"La Plata",bL:true,bV:false},
  {id:"23_14_5",t:2023,f:14,d:"2023-07-22",local:"CUBA",pL:34,pV:15,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_14_6",t:2023,f:14,d:"2023-07-22",local:"Pucara",pL:19,pV:42,visitante:"CASI",bL:false,bV:true},
  {id:"23_15_1",t:2023,f:15,d:"2023-08-12",local:"Hindú",pL:27,pV:25,visitante:"CASI",bL:false,bV:false},
  {id:"23_15_2",t:2023,f:15,d:"2023-08-12",local:"Atl. del Rosario",pL:29,pV:27,visitante:"Pucara",bL:false,bV:false},
  {id:"23_15_3",t:2023,f:15,d:"2023-08-12",local:"La Plata",pL:18,pV:21,visitante:"CUBA",bL:false,bV:false},
  {id:"23_15_4",t:2023,f:15,d:"2023-08-12",local:"Buenos Aires",pL:27,pV:30,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_15_5",t:2023,f:15,d:"2023-08-12",local:"Alumni",pL:15,pV:16,visitante:"San Luis",bL:false,bV:false},
  {id:"23_15_6",t:2023,f:15,d:"2023-08-12",local:"SIC",pL:23,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"23_16_1",t:2023,f:16,d:"2023-08-19",local:"San Luis",pL:11,pV:52,visitante:"Hindú",bL:false,bV:true},
  {id:"23_16_2",t:2023,f:16,d:"2023-08-19",local:"Belgrano Ath.",pL:35,pV:23,visitante:"Alumni",bL:true,bV:false},
  {id:"23_16_3",t:2023,f:16,d:"2023-08-19",local:"Newman",pL:33,pV:24,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_16_4",t:2023,f:16,d:"2023-08-19",local:"Pucara",pL:15,pV:21,visitante:"La Plata",bL:false,bV:false},
  {id:"23_16_5",t:2023,f:16,d:"2023-08-19",local:"CUBA",pL:19,pV:24,visitante:"SIC",bL:false,bV:false},
  {id:"23_16_6",t:2023,f:16,d:"2023-08-19",local:"CASI",pL:45,pV:28,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"23_17_1",t:2023,f:17,d:"2023-08-26",local:"Hindú",pL:52,pV:25,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"23_17_2",t:2023,f:17,d:"2023-08-26",local:"La Plata",pL:22,pV:14,visitante:"CASI",bL:false,bV:false},
  {id:"23_17_3",t:2023,f:17,d:"2023-08-26",local:"SIC",pL:54,pV:26,visitante:"Pucara",bL:true,bV:false},
  {id:"23_17_4",t:2023,f:17,d:"2023-08-26",local:"Alumni",pL:23,pV:20,visitante:"Newman",bL:false,bV:false},
  {id:"23_17_5",t:2023,f:17,d:"2023-08-26",local:"San Luis",pL:29,pV:26,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_17_6",t:2023,f:17,d:"2023-08-26",local:"Buenos Aires",pL:30,pV:36,visitante:"CUBA",bL:false,bV:false},
  {id:"23_18_1",t:2023,f:18,d:"2023-09-02",local:"Belgrano Ath.",pL:18,pV:44,visitante:"Hindú",bL:false,bV:true},
  {id:"23_18_2",t:2023,f:18,d:"2023-09-02",local:"Newman",pL:31,pV:13,visitante:"San Luis",bL:true,bV:false},
  {id:"23_18_3",t:2023,f:18,d:"2023-09-02",local:"CUBA",pL:22,pV:20,visitante:"Alumni",bL:false,bV:false},
  {id:"23_18_4",t:2023,f:18,d:"2023-09-02",local:"Pucara",pL:21,pV:23,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_18_5",t:2023,f:18,d:"2023-09-02",local:"CASI",pL:31,pV:36,visitante:"SIC",bL:false,bV:false},
  {id:"23_18_6",t:2023,f:18,d:"2023-09-02",local:"Atl. del Rosario",pL:22,pV:13,visitante:"La Plata",bL:false,bV:false},
  {id:"23_19_1",t:2023,f:19,d:"2023-09-16",local:"Hindú",pL:43,pV:15,visitante:"La Plata",bL:true,bV:false},
  {id:"23_19_2",t:2023,f:19,d:"2023-09-16",local:"SIC",pL:27,pV:32,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_19_3",t:2023,f:19,d:"2023-09-16",local:"Buenos Aires",pL:16,pV:40,visitante:"CASI",bL:false,bV:true},
  {id:"23_19_4",t:2023,f:19,d:"2023-09-16",local:"Alumni",pL:58,pV:7,visitante:"Pucara",bL:true,bV:false},
  {id:"23_19_5",t:2023,f:19,d:"2023-09-16",local:"San Luis",pL:24,pV:25,visitante:"CUBA",bL:false,bV:false},
  {id:"23_19_6",t:2023,f:19,d:"2023-09-16",local:"Belgrano Ath.",pL:27,pV:40,visitante:"Newman",bL:false,bV:false},
  {id:"23_20_1",t:2023,f:20,d:"2023-09-23",local:"Newman",pL:18,pV:34,visitante:"Hindú",bL:false,bV:true},
  {id:"23_20_2",t:2023,f:20,d:"2023-09-23",local:"CUBA",pL:23,pV:15,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_20_3",t:2023,f:20,d:"2023-09-23",local:"Pucara",pL:15,pV:31,visitante:"San Luis",bL:false,bV:false},
  {id:"23_20_4",t:2023,f:20,d:"2023-09-23",local:"CASI",pL:24,pV:45,visitante:"Alumni",bL:false,bV:true},
  {id:"23_20_5",t:2023,f:20,d:"2023-09-23",local:"Atl. del Rosario",pL:39,pV:20,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"23_20_6",t:2023,f:20,d:"2023-09-23",local:"La Plata",pL:14,pV:37,visitante:"SIC",bL:false,bV:true},
  {id:"23_21_1",t:2023,f:21,d:"2023-09-30",local:"Hindú",pL:21,pV:27,visitante:"SIC",bL:false,bV:false},
  {id:"23_21_2",t:2023,f:21,d:"2023-09-30",local:"Buenos Aires",pL:14,pV:32,visitante:"La Plata",bL:false,bV:false},
  {id:"23_21_3",t:2023,f:21,d:"2023-09-30",local:"Alumni",pL:37,pV:25,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"23_21_4",t:2023,f:21,d:"2023-09-30",local:"Belgrano Ath.",pL:55,pV:28,visitante:"Pucara",bL:true,bV:false},
  {id:"23_21_5",t:2023,f:21,d:"2023-09-30",local:"San Luis",pL:36,pV:31,visitante:"CASI",bL:false,bV:false},
  {id:"23_21_6",t:2023,f:21,d:"2023-09-30",local:"Newman",pL:39,pV:26,visitante:"CUBA",bL:false,bV:false},
  {id:"23_22_1",t:2023,f:22,d:"2023-10-21",local:"CUBA",pL:36,pV:35,visitante:"Hindú",bL:false,bV:false},
  {id:"23_22_2",t:2023,f:22,d:"2023-10-21",local:"Pucara",pL:17,pV:35,visitante:"Newman",bL:false,bV:false},
  {id:"23_22_3",t:2023,f:22,d:"2023-10-21",local:"CASI",pL:20,pV:17,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"23_22_4",t:2023,f:22,d:"2023-10-21",local:"Atl. del Rosario",pL:12,pV:16,visitante:"San Luis",bL:false,bV:false},
  {id:"23_22_5",t:2023,f:22,d:"2023-10-21",local:"La Plata",pL:19,pV:17,visitante:"Alumni",bL:false,bV:false},
  {id:"23_22_6",t:2023,f:22,d:"2023-10-21",local:"SIC",pL:21,pV:25,visitante:"Buenos Aires",bL:false,bV:false},
  // ── 2024 ─────────────────────────────────────────────────
  {id:"24_01_1",t:2024,f:1,d:"2024-04-06",local:"Alumni",pL:37,pV:30,visitante:"Champagnat",bL:false,bV:false},
  {id:"24_01_2",t:2024,f:1,d:"2024-04-06",local:"SIC",pL:51,pV:12,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_01_3",t:2024,f:1,d:"2024-04-06",local:"CUBA",pL:21,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"24_01_4",t:2024,f:1,d:"2024-04-06",local:"CASI",pL:30,pV:27,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_01_5",t:2024,f:1,d:"2024-04-06",local:"Regatas",pL:13,pV:24,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_01_6",t:2024,f:1,d:"2024-04-06",local:"San Luis",pL:25,pV:20,visitante:"Hindú",bL:false,bV:false},
  {id:"24_02_1",t:2024,f:2,d:"2024-04-13",local:"San Luis",pL:17,pV:18,visitante:"Alumni",bL:false,bV:false},
  {id:"24_02_2",t:2024,f:2,d:"2024-04-13",local:"Hindú",pL:21,pV:19,visitante:"Regatas",bL:false,bV:false},
  {id:"24_02_3",t:2024,f:2,d:"2024-04-13",local:"Belgrano Ath.",pL:14,pV:12,visitante:"CASI",bL:false,bV:false},
  {id:"24_02_4",t:2024,f:2,d:"2024-04-13",local:"Buenos Aires",pL:34,pV:15,visitante:"CUBA",bL:true,bV:false},
  {id:"24_02_5",t:2024,f:2,d:"2024-04-13",local:"Newman",pL:12,pV:35,visitante:"SIC",bL:false,bV:false},
  {id:"24_02_6",t:2024,f:2,d:"2024-04-13",local:"Atl. del Rosario",pL:18,pV:18,visitante:"Champagnat",bL:false,bV:false},
  {id:"24_03_1",t:2024,f:3,d:"2024-04-20",local:"Alumni",pL:37,pV:8,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_03_2",t:2024,f:3,d:"2024-04-20",local:"Champagnat",pL:27,pV:22,visitante:"Newman",bL:false,bV:false},
  {id:"24_03_3",t:2024,f:3,d:"2024-04-20",local:"SIC",pL:31,pV:25,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_03_4",t:2024,f:3,d:"2024-04-20",local:"CUBA",pL:41,pV:42,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_03_5",t:2024,f:3,d:"2024-04-20",local:"CASI",pL:44,pV:8,visitante:"Hindú",bL:true,bV:false},
  {id:"24_03_6",t:2024,f:3,d:"2024-04-20",local:"Regatas",pL:28,pV:17,visitante:"San Luis",bL:false,bV:false},
  {id:"24_04_1",t:2024,f:4,d:"2024-04-27",local:"Regatas",pL:13,pV:18,visitante:"Alumni",bL:false,bV:false},
  {id:"24_04_2",t:2024,f:4,d:"2024-04-27",local:"San Luis",pL:17,pV:20,visitante:"CASI",bL:false,bV:false},
  {id:"24_04_3",t:2024,f:4,d:"2024-04-27",local:"Hindú",pL:17,pV:14,visitante:"CUBA",bL:false,bV:false},
  {id:"24_04_4",t:2024,f:4,d:"2024-04-27",local:"Belgrano Ath.",pL:24,pV:32,visitante:"SIC",bL:false,bV:false},
  {id:"24_04_5",t:2024,f:4,d:"2024-04-27",local:"Buenos Aires",pL:33,pV:23,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_04_6",t:2024,f:4,d:"2024-04-27",local:"Newman",pL:45,pV:17,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_05_1",t:2024,f:5,d:"2024-05-11",local:"Alumni",pL:37,pV:26,visitante:"Newman",bL:true,bV:false},
  {id:"24_05_2",t:2024,f:5,d:"2024-05-11",local:"Atl. del Rosario",pL:24,pV:33,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_05_3",t:2024,f:5,d:"2024-05-11",local:"Champagnat",pL:18,pV:49,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"24_05_4",t:2024,f:5,d:"2024-05-11",local:"CUBA",pL:10,pV:15,visitante:"San Luis",bL:false,bV:false},
  {id:"24_05_5",t:2024,f:5,d:"2024-05-11",local:"CASI",pL:41,pV:18,visitante:"Regatas",bL:true,bV:false},
  {id:"24_05_6",t:2024,f:5,d:"2024-05-11",local:"SIC",pL:15,pV:13,visitante:"Hindú",bL:false,bV:false},
  {id:"24_06_1",t:2024,f:6,d:"2024-05-18",local:"CASI",pL:55,pV:20,visitante:"Alumni",bL:true,bV:false},
  {id:"24_06_2",t:2024,f:6,d:"2024-05-18",local:"Regatas",pL:35,pV:27,visitante:"CUBA",bL:false,bV:false},
  {id:"24_06_3",t:2024,f:6,d:"2024-05-18",local:"San Luis",pL:21,pV:28,visitante:"SIC",bL:false,bV:false},
  {id:"24_06_4",t:2024,f:6,d:"2024-05-18",local:"Hindú",pL:19,pV:19,visitante:"Champagnat",bL:false,bV:false},
  {id:"24_06_5",t:2024,f:6,d:"2024-05-18",local:"Belgrano Ath.",pL:69,pV:22,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_06_6",t:2024,f:6,d:"2024-05-18",local:"Buenos Aires",pL:29,pV:30,visitante:"Newman",bL:false,bV:false},
  {id:"24_07_1",t:2024,f:7,d:"2024-05-25",local:"Alumni",pL:42,pV:16,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"24_07_2",t:2024,f:7,d:"2024-05-25",local:"Newman",pL:26,pV:56,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"24_07_3",t:2024,f:7,d:"2024-05-25",local:"Atl. del Rosario",pL:27,pV:31,visitante:"Hindú",bL:false,bV:false},
  {id:"24_07_4",t:2024,f:7,d:"2024-05-25",local:"Champagnat",pL:19,pV:20,visitante:"San Luis",bL:false,bV:false},
  {id:"24_07_5",t:2024,f:7,d:"2024-05-25",local:"SIC",pL:19,pV:10,visitante:"Regatas",bL:false,bV:false},
  {id:"24_07_6",t:2024,f:7,d:"2024-05-25",local:"CUBA",pL:11,pV:11,visitante:"CASI",bL:false,bV:false},
  {id:"24_08_1",t:2024,f:8,d:"2024-06-01",local:"CUBA",pL:44,pV:26,visitante:"Alumni",bL:false,bV:false},
  {id:"24_08_2",t:2024,f:8,d:"2024-06-01",local:"CASI",pL:39,pV:29,visitante:"SIC",bL:false,bV:false},
  {id:"24_08_3",t:2024,f:8,d:"2024-06-01",local:"Regatas",pL:19,pV:9,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_08_4",t:2024,f:8,d:"2024-06-01",local:"San Luis",pL:36,pV:14,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_08_5",t:2024,f:8,d:"2024-06-01",local:"Hindú",pL:22,pV:40,visitante:"Newman",bL:false,bV:false},
  {id:"24_08_6",t:2024,f:8,d:"2024-06-01",local:"Belgrano Ath.",pL:31,pV:27,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_09_1",t:2024,f:9,d:"2024-06-08",local:"Alumni",pL:9,pV:22,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"24_09_2",t:2024,f:9,d:"2024-06-08",local:"Buenos Aires",pL:26,pV:17,visitante:"Hindú",bL:false,bV:false},
  {id:"24_09_3",t:2024,f:9,d:"2024-06-08",local:"Newman",pL:59,pV:15,visitante:"San Luis",bL:true,bV:false},
  {id:"24_09_4",t:2024,f:9,d:"2024-06-08",local:"Atl. del Rosario",pL:27,pV:27,visitante:"Regatas",bL:false,bV:false},
  {id:"24_09_5",t:2024,f:9,d:"2024-06-08",local:"Champagnat",pL:23,pV:28,visitante:"CASI",bL:false,bV:false},
  {id:"24_09_6",t:2024,f:9,d:"2024-06-08",local:"SIC",pL:30,pV:31,visitante:"CUBA",bL:false,bV:false},
  {id:"24_10_1",t:2024,f:10,d:"2024-06-22",local:"SIC",pL:22,pV:31,visitante:"Alumni",bL:false,bV:false},
  {id:"24_10_2",t:2024,f:10,d:"2024-06-22",local:"CUBA",pL:52,pV:13,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_10_3",t:2024,f:10,d:"2024-06-22",local:"CASI",pL:37,pV:17,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_10_4",t:2024,f:10,d:"2024-06-22",local:"Regatas",pL:18,pV:35,visitante:"Newman",bL:false,bV:false},
  {id:"24_10_5",t:2024,f:10,d:"2024-06-22",local:"San Luis",pL:28,pV:22,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_10_6",t:2024,f:10,d:"2024-06-22",local:"Hindú",pL:26,pV:23,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_11_1",t:2024,f:11,d:"2024-06-29",local:"Alumni",pL:24,pV:19,visitante:"Hindú",bL:true,bV:false},
  {id:"24_11_2",t:2024,f:11,d:"2024-06-29",local:"Belgrano Ath.",pL:40,pV:22,visitante:"San Luis",bL:false,bV:false},
  {id:"24_11_3",t:2024,f:11,d:"2024-06-29",local:"Buenos Aires",pL:20,pV:17,visitante:"Regatas",bL:false,bV:false},
  {id:"24_11_4",t:2024,f:11,d:"2024-06-29",local:"Newman",pL:37,pV:14,visitante:"CASI",bL:false,bV:false},
  {id:"24_11_5",t:2024,f:11,d:"2024-06-29",local:"Atl. del Rosario",pL:17,pV:38,visitante:"CUBA",bL:false,bV:true},
  {id:"24_11_6",t:2024,f:11,d:"2024-06-29",local:"Champagnat",pL:6,pV:39,visitante:"SIC",bL:false,bV:true},
  {id:"24_12_1",t:2024,f:12,d:"2024-07-06",local:"Champagnat",pL:18,pV:25,visitante:"Alumni",bL:false,bV:false},
  {id:"24_12_2",t:2024,f:12,d:"2024-07-06",local:"Atl. del Rosario",pL:32,pV:49,visitante:"SIC",bL:false,bV:false},
  {id:"24_12_3",t:2024,f:12,d:"2024-07-06",local:"Newman",pL:34,pV:27,visitante:"CUBA",bL:false,bV:false},
  {id:"24_12_4",t:2024,f:12,d:"2024-07-06",local:"Buenos Aires",pL:24,pV:53,visitante:"CASI",bL:false,bV:true},
  {id:"24_12_5",t:2024,f:12,d:"2024-07-06",local:"Belgrano Ath.",pL:22,pV:12,visitante:"Regatas",bL:true,bV:false},
  {id:"24_12_6",t:2024,f:12,d:"2024-07-06",local:"Hindú",pL:17,pV:23,visitante:"San Luis",bL:false,bV:false},
  {id:"24_13_1",t:2024,f:13,d:"2024-07-14",local:"Alumni",pL:19,pV:16,visitante:"San Luis",bL:false,bV:false},
  {id:"24_13_2",t:2024,f:13,d:"2024-07-14",local:"Regatas",pL:20,pV:35,visitante:"Hindú",bL:false,bV:false},
  {id:"24_13_3",t:2024,f:13,d:"2024-07-14",local:"CASI",pL:37,pV:41,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_13_4",t:2024,f:13,d:"2024-07-14",local:"CUBA",pL:30,pV:10,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"24_13_5",t:2024,f:13,d:"2024-07-14",local:"SIC",pL:10,pV:38,visitante:"Newman",bL:false,bV:true},
  {id:"24_13_6",t:2024,f:13,d:"2024-07-14",local:"Champagnat",pL:36,pV:20,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_14_1",t:2024,f:14,d:"2024-08-03",local:"Atl. del Rosario",pL:26,pV:51,visitante:"Alumni",bL:false,bV:true},
  {id:"24_14_2",t:2024,f:14,d:"2024-08-03",local:"Newman",pL:39,pV:20,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_14_3",t:2024,f:14,d:"2024-08-03",local:"Buenos Aires",pL:20,pV:20,visitante:"SIC",bL:false,bV:false},
  {id:"24_14_4",t:2024,f:14,d:"2024-08-03",local:"Belgrano Ath.",pL:30,pV:22,visitante:"CUBA",bL:false,bV:false},
  {id:"24_14_5",t:2024,f:14,d:"2024-08-03",local:"Hindú",pL:26,pV:18,visitante:"CASI",bL:false,bV:false},
  {id:"24_14_6",t:2024,f:14,d:"2024-08-03",local:"San Luis",pL:19,pV:18,visitante:"Regatas",bL:false,bV:false},
  {id:"24_15_1",t:2024,f:15,d:"2024-08-10",local:"Alumni",pL:32,pV:10,visitante:"Regatas",bL:true,bV:false},
  {id:"24_15_2",t:2024,f:15,d:"2024-08-10",local:"CASI",pL:44,pV:21,visitante:"San Luis",bL:true,bV:false},
  {id:"24_15_3",t:2024,f:15,d:"2024-08-10",local:"CUBA",pL:27,pV:28,visitante:"Hindú",bL:false,bV:false},
  {id:"24_15_4",t:2024,f:15,d:"2024-08-10",local:"SIC",pL:34,pV:31,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_15_5",t:2024,f:15,d:"2024-08-10",local:"Champagnat",pL:13,pV:20,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_15_6",t:2024,f:15,d:"2024-08-10",local:"Atl. del Rosario",pL:21,pV:56,visitante:"Newman",bL:false,bV:true},
  {id:"24_16_1",t:2024,f:16,d:"2024-08-17",local:"Newman",pL:30,pV:19,visitante:"Alumni",bL:false,bV:false},
  {id:"24_16_2",t:2024,f:16,d:"2024-08-17",local:"Buenos Aires",pL:12,pV:27,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"24_16_3",t:2024,f:16,d:"2024-08-17",local:"Belgrano Ath.",pL:47,pV:25,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_16_4",t:2024,f:16,d:"2024-08-17",local:"Hindú",pL:12,pV:44,visitante:"SIC",bL:false,bV:true},
  {id:"24_16_5",t:2024,f:16,d:"2024-08-17",local:"San Luis",pL:31,pV:28,visitante:"CUBA",bL:false,bV:false},
  {id:"24_16_6",t:2024,f:16,d:"2024-08-17",local:"Regatas",pL:30,pV:24,visitante:"CASI",bL:false,bV:false},
  {id:"24_17_1",t:2024,f:17,d:"2024-08-24",local:"Alumni",pL:37,pV:25,visitante:"CASI",bL:false,bV:false},
  {id:"24_17_2",t:2024,f:17,d:"2024-08-24",local:"CUBA",pL:28,pV:23,visitante:"Regatas",bL:false,bV:false},
  {id:"24_17_3",t:2024,f:17,d:"2024-08-24",local:"SIC",pL:29,pV:27,visitante:"San Luis",bL:false,bV:false},
  {id:"24_17_4",t:2024,f:17,d:"2024-08-24",local:"Champagnat",pL:33,pV:35,visitante:"Hindú",bL:false,bV:true},
  {id:"24_17_5",t:2024,f:17,d:"2024-08-24",local:"Atl. del Rosario",pL:35,pV:31,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_17_6",t:2024,f:17,d:"2024-08-24",local:"Newman",pL:45,pV:19,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"24_18_1",t:2024,f:18,d:"2024-08-31",local:"Buenos Aires",pL:17,pV:27,visitante:"Alumni",bL:false,bV:false},
  {id:"24_18_2",t:2024,f:18,d:"2024-08-31",local:"Belgrano Ath.",pL:9,pV:23,visitante:"Newman",bL:false,bV:false},
  {id:"24_18_3",t:2024,f:18,d:"2024-08-31",local:"Hindú",pL:34,pV:27,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"24_18_4",t:2024,f:18,d:"2024-08-31",local:"San Luis",pL:17,pV:14,visitante:"Champagnat",bL:false,bV:false},
  {id:"24_18_5",t:2024,f:18,d:"2024-08-31",local:"Regatas",pL:12,pV:16,visitante:"SIC",bL:false,bV:false},
  {id:"24_18_6",t:2024,f:18,d:"2024-08-31",local:"CASI",pL:27,pV:3,visitante:"CUBA",bL:true,bV:false},
  {id:"24_19_1",t:2024,f:19,d:"2024-09-14",local:"Alumni",pL:39,pV:24,visitante:"CUBA",bL:false,bV:false},
  {id:"24_19_2",t:2024,f:19,d:"2024-09-14",local:"SIC",pL:27,pV:26,visitante:"CASI",bL:false,bV:false},
  {id:"24_19_3",t:2024,f:19,d:"2024-09-14",local:"Champagnat",pL:25,pV:32,visitante:"Regatas",bL:false,bV:false},
  {id:"24_19_4",t:2024,f:19,d:"2024-09-14",local:"Atl. del Rosario",pL:34,pV:24,visitante:"San Luis",bL:true,bV:false},
  {id:"24_19_5",t:2024,f:19,d:"2024-09-14",local:"Newman",pL:40,pV:7,visitante:"Hindú",bL:true,bV:false},
  {id:"24_19_6",t:2024,f:19,d:"2024-09-14",local:"Buenos Aires",pL:22,pV:21,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_20_1",t:2024,f:20,d:"2024-09-21",local:"Belgrano Ath.",pL:25,pV:23,visitante:"Alumni",bL:false,bV:false},
  {id:"24_20_2",t:2024,f:20,d:"2024-09-21",local:"Hindú",pL:38,pV:11,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"24_20_3",t:2024,f:20,d:"2024-09-21",local:"San Luis",pL:20,pV:32,visitante:"Newman",bL:false,bV:false},
  {id:"24_20_4",t:2024,f:20,d:"2024-09-21",local:"Regatas",pL:20,pV:10,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"24_20_5",t:2024,f:20,d:"2024-09-21",local:"CASI",pL:75,pV:33,visitante:"Champagnat",bL:true,bV:false},
  {id:"24_20_6",t:2024,f:20,d:"2024-09-21",local:"CUBA",pL:12,pV:26,visitante:"SIC",bL:false,bV:false},
  {id:"24_21_1",t:2024,f:21,d:"2024-09-28",local:"Alumni",pL:13,pV:20,visitante:"SIC",bL:false,bV:false},
  {id:"24_21_2",t:2024,f:21,d:"2024-09-28",local:"Champagnat",pL:32,pV:47,visitante:"CUBA",bL:false,bV:true},
  {id:"24_21_3",t:2024,f:21,d:"2024-09-28",local:"Atl. del Rosario",pL:34,pV:59,visitante:"CASI",bL:false,bV:true},
  {id:"24_21_4",t:2024,f:21,d:"2024-09-28",local:"Newman",pL:33,pV:37,visitante:"Regatas",bL:false,bV:false},
  {id:"24_21_5",t:2024,f:21,d:"2024-09-28",local:"Buenos Aires",pL:32,pV:27,visitante:"San Luis",bL:false,bV:false},
  {id:"24_21_6",t:2024,f:21,d:"2024-09-28",local:"Belgrano Ath.",pL:42,pV:29,visitante:"Hindú",bL:false,bV:false},
  {id:"24_22_1",t:2024,f:22,d:"2024-10-05",local:"Hindú",pL:19,pV:43,visitante:"Alumni",bL:false,bV:true},
  {id:"24_22_2",t:2024,f:22,d:"2024-10-05",local:"San Luis",pL:29,pV:27,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"24_22_3",t:2024,f:22,d:"2024-10-05",local:"Regatas",pL:26,pV:17,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"24_22_4",t:2024,f:22,d:"2024-10-05",local:"CASI",pL:21,pV:24,visitante:"Newman",bL:false,bV:false},
  {id:"24_22_5",t:2024,f:22,d:"2024-10-05",local:"CUBA",pL:50,pV:29,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"24_22_6",t:2024,f:22,d:"2024-10-05",local:"SIC",pL:55,pV:12,visitante:"Champagnat",bL:true,bV:false},
  // ── 2025 ─────────────────────────────────────────────────
  {id:"25_01_1",t:2025,f:1,d:"2025-04-05",local:"Alumni",pL:34,pV:26,visitante:"CUBA",bL:true,bV:false},
  {id:"25_01_2",t:2025,f:1,d:"2025-04-05",local:"La Plata",pL:28,pV:44,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"25_01_3",t:2025,f:1,d:"2025-04-05",local:"Buenos Aires",pL:20,pV:35,visitante:"CASI",bL:false,bV:true},
  {id:"25_01_4",t:2025,f:1,d:"2025-04-05",local:"Hindú",pL:48,pV:13,visitante:"San Luis",bL:true,bV:false},
  {id:"25_01_5",t:2025,f:1,d:"2025-04-05",local:"Newman",pL:26,pV:27,visitante:"Regatas",bL:false,bV:false},
  {id:"25_01_6",t:2025,f:1,d:"2025-04-05",local:"Los Tilos",pL:27,pV:23,visitante:"SIC",bL:false,bV:false},
  {id:"25_02_1",t:2025,f:2,d:"2025-04-12",local:"Los Tilos",pL:16,pV:20,visitante:"Alumni",bL:false,bV:false},
  {id:"25_02_2",t:2025,f:2,d:"2025-04-12",local:"SIC",pL:34,pV:24,visitante:"Newman",bL:false,bV:false},
  {id:"25_02_3",t:2025,f:2,d:"2025-04-12",local:"Regatas",pL:31,pV:21,visitante:"Hindú",bL:false,bV:false},
  {id:"25_02_4",t:2025,f:2,d:"2025-04-12",local:"San Luis",pL:35,pV:21,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_02_5",t:2025,f:2,d:"2025-04-12",local:"CASI",pL:51,pV:11,visitante:"La Plata",bL:true,bV:false},
  {id:"25_02_6",t:2025,f:2,d:"2025-04-12",local:"Belgrano Ath.",pL:24,pV:20,visitante:"CUBA",bL:false,bV:false},
  {id:"25_03_1",t:2025,f:3,d:"2025-04-26",local:"Alumni",pL:19,pV:35,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_03_2",t:2025,f:3,d:"2025-04-26",local:"CUBA",pL:9,pV:34,visitante:"CASI",bL:false,bV:true},
  {id:"25_03_3",t:2025,f:3,d:"2025-04-26",local:"La Plata",pL:15,pV:8,visitante:"San Luis",bL:false,bV:false},
  {id:"25_03_4",t:2025,f:3,d:"2025-04-26",local:"Buenos Aires",pL:16,pV:15,visitante:"Regatas",bL:false,bV:false},
  {id:"25_03_5",t:2025,f:3,d:"2025-04-26",local:"Hindú",pL:28,pV:32,visitante:"SIC",bL:false,bV:false},
  {id:"25_03_6",t:2025,f:3,d:"2025-04-26",local:"Newman",pL:21,pV:23,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_04_1",t:2025,f:4,d:"2025-05-03",local:"Newman",pL:24,pV:14,visitante:"Alumni",bL:false,bV:false},
  {id:"25_04_2",t:2025,f:4,d:"2025-05-03",local:"Los Tilos",pL:45,pV:12,visitante:"Hindú",bL:true,bV:false},
  {id:"25_04_3",t:2025,f:4,d:"2025-05-03",local:"SIC",pL:27,pV:34,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_04_4",t:2025,f:4,d:"2025-05-03",local:"Regatas",pL:49,pV:20,visitante:"La Plata",bL:true,bV:false},
  {id:"25_04_5",t:2025,f:4,d:"2025-05-03",local:"San Luis",pL:17,pV:19,visitante:"CUBA",bL:false,bV:false},
  {id:"25_04_6",t:2025,f:4,d:"2025-05-03",local:"CASI",pL:23,pV:20,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_05_1",t:2025,f:5,d:"2025-05-10",local:"Alumni",pL:22,pV:29,visitante:"CASI",bL:false,bV:false},
  {id:"25_05_2",t:2025,f:5,d:"2025-05-10",local:"Belgrano Ath.",pL:52,pV:17,visitante:"San Luis",bL:true,bV:false},
  {id:"25_05_3",t:2025,f:5,d:"2025-05-10",local:"CUBA",pL:33,pV:9,visitante:"Regatas",bL:true,bV:false},
  {id:"25_05_4",t:2025,f:5,d:"2025-05-10",local:"La Plata",pL:24,pV:19,visitante:"SIC",bL:false,bV:false},
  {id:"25_05_5",t:2025,f:5,d:"2025-05-10",local:"Buenos Aires",pL:25,pV:39,visitante:"Los Tilos",bL:false,bV:true},
  {id:"25_05_6",t:2025,f:5,d:"2025-05-10",local:"Hindú",pL:20,pV:14,visitante:"Newman",bL:false,bV:false},
  {id:"25_06_1",t:2025,f:6,d:"2025-05-17",local:"Hindú",pL:31,pV:35,visitante:"Alumni",bL:false,bV:false},
  {id:"25_06_2",t:2025,f:6,d:"2025-05-17",local:"Newman",pL:18,pV:13,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_06_3",t:2025,f:6,d:"2025-05-17",local:"Los Tilos",pL:16,pV:9,visitante:"La Plata",bL:false,bV:false},
  {id:"25_06_4",t:2025,f:6,d:"2025-05-17",local:"SIC",pL:38,pV:31,visitante:"CUBA",bL:true,bV:false},
  {id:"25_06_5",t:2025,f:6,d:"2025-05-17",local:"Regatas",pL:21,pV:29,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_06_6",t:2025,f:6,d:"2025-05-17",local:"San Luis",pL:17,pV:37,visitante:"CASI",bL:false,bV:true},
  {id:"25_07_1",t:2025,f:7,d:"2025-05-31",local:"Alumni",pL:39,pV:29,visitante:"San Luis",bL:true,bV:false},
  {id:"25_07_2",t:2025,f:7,d:"2025-05-31",local:"CASI",pL:47,pV:23,visitante:"Regatas",bL:true,bV:false},
  {id:"25_07_3",t:2025,f:7,d:"2025-05-31",local:"Belgrano Ath.",pL:43,pV:31,visitante:"SIC",bL:false,bV:false},
  {id:"25_07_4",t:2025,f:7,d:"2025-05-31",local:"CUBA",pL:25,pV:26,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_07_5",t:2025,f:7,d:"2025-05-31",local:"La Plata",pL:17,pV:21,visitante:"Newman",bL:false,bV:false},
  {id:"25_07_6",t:2025,f:7,d:"2025-05-31",local:"Buenos Aires",pL:17,pV:25,visitante:"Hindú",bL:false,bV:false},
  {id:"25_08_1",t:2025,f:8,d:"2025-06-07",local:"Buenos Aires",pL:13,pV:33,visitante:"Alumni",bL:false,bV:true},
  {id:"25_08_2",t:2025,f:8,d:"2025-06-07",local:"Hindú",pL:24,pV:20,visitante:"La Plata",bL:false,bV:false},
  {id:"25_08_3",t:2025,f:8,d:"2025-06-07",local:"Newman",pL:21,pV:20,visitante:"CUBA",bL:false,bV:false},
  {id:"25_08_4",t:2025,f:8,d:"2025-06-07",local:"Los Tilos",pL:14,pV:42,visitante:"Belgrano Ath.",bL:false,bV:true},
  {id:"25_08_5",t:2025,f:8,d:"2025-06-07",local:"SIC",pL:16,pV:13,visitante:"CASI",bL:false,bV:false},
  {id:"25_08_6",t:2025,f:8,d:"2025-06-07",local:"Regatas",pL:37,pV:14,visitante:"San Luis",bL:true,bV:false},
  {id:"25_09_1",t:2025,f:9,d:"2025-06-14",local:"Alumni",pL:9,pV:12,visitante:"Regatas",bL:false,bV:false},
  {id:"25_09_2",t:2025,f:9,d:"2025-06-14",local:"San Luis",pL:6,pV:19,visitante:"SIC",bL:false,bV:true},
  {id:"25_09_3",t:2025,f:9,d:"2025-06-14",local:"CASI",pL:25,pV:21,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_09_4",t:2025,f:9,d:"2025-06-14",local:"Belgrano Ath.",pL:41,pV:21,visitante:"Newman",bL:true,bV:false},
  {id:"25_09_5",t:2025,f:9,d:"2025-06-14",local:"CUBA",pL:10,pV:6,visitante:"Hindú",bL:false,bV:false},
  {id:"25_09_6",t:2025,f:9,d:"2025-06-14",local:"La Plata",pL:20,pV:17,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_10_1",t:2025,f:10,d:"2025-06-21",local:"La Plata",pL:15,pV:21,visitante:"Alumni",bL:false,bV:false},
  {id:"25_10_2",t:2025,f:10,d:"2025-06-21",local:"Buenos Aires",pL:23,pV:26,visitante:"CUBA",bL:false,bV:false},
  {id:"25_10_3",t:2025,f:10,d:"2025-06-21",local:"Hindú",pL:26,pV:35,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_10_4",t:2025,f:10,d:"2025-06-21",local:"Newman",pL:22,pV:8,visitante:"CASI",bL:false,bV:false},
  {id:"25_10_5",t:2025,f:10,d:"2025-06-21",local:"Los Tilos",pL:21,pV:21,visitante:"San Luis",bL:false,bV:false},
  {id:"25_10_6",t:2025,f:10,d:"2025-06-21",local:"SIC",pL:38,pV:17,visitante:"Regatas",bL:false,bV:false},
  {id:"25_11_1",t:2025,f:11,d:"2025-06-28",local:"Alumni",pL:24,pV:48,visitante:"SIC",bL:false,bV:true},
  {id:"25_11_2",t:2025,f:11,d:"2025-06-28",local:"Regatas",pL:20,pV:13,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_11_3",t:2025,f:11,d:"2025-06-28",local:"San Luis",pL:16,pV:20,visitante:"Newman",bL:false,bV:false},
  {id:"25_11_4",t:2025,f:11,d:"2025-06-28",local:"CASI",pL:26,pV:25,visitante:"Hindú",bL:false,bV:false},
  {id:"25_11_5",t:2025,f:11,d:"2025-06-28",local:"Belgrano Ath.",pL:41,pV:32,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_11_6",t:2025,f:11,d:"2025-06-28",local:"CUBA",pL:27,pV:23,visitante:"La Plata",bL:false,bV:false},
  {id:"25_12_1",t:2025,f:12,d:"2025-07-12",local:"CUBA",pL:22,pV:14,visitante:"Alumni",bL:false,bV:false},
  {id:"25_12_2",t:2025,f:12,d:"2025-07-12",local:"Belgrano Ath.",pL:38,pV:33,visitante:"La Plata",bL:false,bV:false},
  {id:"25_12_3",t:2025,f:12,d:"2025-07-12",local:"CASI",pL:55,pV:15,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"25_12_4",t:2025,f:12,d:"2025-07-12",local:"San Luis",pL:3,pV:55,visitante:"Hindú",bL:false,bV:true},
  {id:"25_12_5",t:2025,f:12,d:"2025-07-12",local:"Regatas",pL:24,pV:26,visitante:"Newman",bL:false,bV:false},
  {id:"25_12_6",t:2025,f:12,d:"2025-07-12",local:"SIC",pL:28,pV:16,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_13_1",t:2025,f:13,d:"2025-07-19",local:"Alumni",pL:35,pV:40,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_13_2",t:2025,f:13,d:"2025-07-19",local:"Newman",pL:45,pV:21,visitante:"SIC",bL:true,bV:false},
  {id:"25_13_3",t:2025,f:13,d:"2025-07-19",local:"Hindú",pL:28,pV:26,visitante:"Regatas",bL:false,bV:false},
  {id:"25_13_4",t:2025,f:13,d:"2025-07-19",local:"Buenos Aires",pL:26,pV:18,visitante:"San Luis",bL:false,bV:false},
  {id:"25_13_5",t:2025,f:13,d:"2025-07-19",local:"La Plata",pL:15,pV:44,visitante:"CASI",bL:false,bV:true},
  {id:"25_13_6",t:2025,f:13,d:"2025-07-19",local:"CUBA",pL:31,pV:41,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_14_1",t:2025,f:14,d:"2025-08-02",local:"Belgrano Ath.",pL:35,pV:17,visitante:"Alumni",bL:true,bV:false},
  {id:"25_14_2",t:2025,f:14,d:"2025-08-02",local:"CASI",pL:30,pV:26,visitante:"CUBA",bL:false,bV:false},
  {id:"25_14_3",t:2025,f:14,d:"2025-08-02",local:"San Luis",pL:31,pV:11,visitante:"La Plata",bL:false,bV:false},
  {id:"25_14_4",t:2025,f:14,d:"2025-08-02",local:"Regatas",pL:27,pV:20,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_14_5",t:2025,f:14,d:"2025-08-02",local:"SIC",pL:23,pV:21,visitante:"Hindú",bL:false,bV:false},
  {id:"25_14_6",t:2025,f:14,d:"2025-08-02",local:"Los Tilos",pL:17,pV:24,visitante:"Newman",bL:false,bV:false},
  {id:"25_15_1",t:2025,f:15,d:"2025-08-09",local:"Alumni",pL:22,pV:30,visitante:"Newman",bL:false,bV:false},
  {id:"25_15_2",t:2025,f:15,d:"2025-08-09",local:"Hindú",pL:10,pV:24,visitante:"Los Tilos",bL:false,bV:true},
  {id:"25_15_3",t:2025,f:15,d:"2025-08-09",local:"Buenos Aires",pL:23,pV:35,visitante:"SIC",bL:false,bV:true},
  {id:"25_15_4",t:2025,f:15,d:"2025-08-09",local:"La Plata",pL:16,pV:13,visitante:"Regatas",bL:false,bV:false},
  {id:"25_15_5",t:2025,f:15,d:"2025-08-09",local:"CUBA",pL:50,pV:40,visitante:"San Luis",bL:true,bV:false},
  {id:"25_15_6",t:2025,f:15,d:"2025-08-09",local:"Belgrano Ath.",pL:27,pV:18,visitante:"CASI",bL:false,bV:false},
  {id:"25_16_1",t:2025,f:16,d:"2025-08-16",local:"CASI",pL:31,pV:20,visitante:"Alumni",bL:false,bV:false},
  {id:"25_16_2",t:2025,f:16,d:"2025-08-16",local:"San Luis",pL:17,pV:22,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_16_3",t:2025,f:16,d:"2025-08-16",local:"Regatas",pL:25,pV:22,visitante:"CUBA",bL:false,bV:false},
  {id:"25_16_4",t:2025,f:16,d:"2025-08-16",local:"SIC",pL:26,pV:10,visitante:"La Plata",bL:true,bV:false},
  {id:"25_16_5",t:2025,f:16,d:"2025-08-16",local:"Los Tilos",pL:37,pV:30,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_16_6",t:2025,f:16,d:"2025-08-16",local:"Newman",pL:34,pV:17,visitante:"Hindú",bL:true,bV:false},
  {id:"25_17_1",t:2025,f:17,d:"2025-08-30",local:"Alumni",pL:24,pV:23,visitante:"Hindú",bL:false,bV:false},
  {id:"25_17_2",t:2025,f:17,d:"2025-08-30",local:"Buenos Aires",pL:10,pV:32,visitante:"Newman",bL:false,bV:true},
  {id:"25_17_3",t:2025,f:17,d:"2025-08-30",local:"La Plata",pL:22,pV:30,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_17_4",t:2025,f:17,d:"2025-08-30",local:"CUBA",pL:34,pV:38,visitante:"SIC",bL:false,bV:false},
  {id:"25_17_5",t:2025,f:17,d:"2025-08-30",local:"Belgrano Ath.",pL:35,pV:29,visitante:"Regatas",bL:false,bV:false},
  {id:"25_17_6",t:2025,f:17,d:"2025-08-30",local:"CASI",pL:25,pV:24,visitante:"San Luis",bL:false,bV:false},
  {id:"25_18_1",t:2025,f:18,d:"2025-09-06",local:"San Luis",pL:29,pV:26,visitante:"Alumni",bL:false,bV:false},
  {id:"25_18_2",t:2025,f:18,d:"2025-09-06",local:"Regatas",pL:23,pV:27,visitante:"CASI",bL:false,bV:false},
  {id:"25_18_3",t:2025,f:18,d:"2025-09-06",local:"SIC",pL:50,pV:39,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_18_4",t:2025,f:18,d:"2025-09-06",local:"Los Tilos",pL:35,pV:34,visitante:"CUBA",bL:false,bV:false},
  {id:"25_18_5",t:2025,f:18,d:"2025-09-06",local:"Newman",pL:41,pV:12,visitante:"La Plata",bL:true,bV:false},
  {id:"25_18_6",t:2025,f:18,d:"2025-09-06",local:"Hindú",pL:31,pV:13,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"25_19_1",t:2025,f:19,d:"2025-09-13",local:"Alumni",pL:34,pV:29,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"25_19_2",t:2025,f:19,d:"2025-09-13",local:"La Plata",pL:36,pV:29,visitante:"Hindú",bL:false,bV:false},
  {id:"25_19_3",t:2025,f:19,d:"2025-09-13",local:"CUBA",pL:36,pV:39,visitante:"Newman",bL:false,bV:false},
  {id:"25_19_4",t:2025,f:19,d:"2025-09-13",local:"Belgrano Ath.",pL:31,pV:32,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_19_5",t:2025,f:19,d:"2025-09-13",local:"CASI",pL:33,pV:29,visitante:"SIC",bL:false,bV:false},
  {id:"25_19_6",t:2025,f:19,d:"2025-09-13",local:"San Luis",pL:27,pV:20,visitante:"Regatas",bL:false,bV:false},
  {id:"25_20_1",t:2025,f:20,d:"2025-09-27",local:"Regatas",pL:16,pV:15,visitante:"Alumni",bL:false,bV:false},
  {id:"25_20_2",t:2025,f:20,d:"2025-09-27",local:"SIC",pL:20,pV:11,visitante:"San Luis",bL:false,bV:false},
  {id:"25_20_3",t:2025,f:20,d:"2025-09-27",local:"Los Tilos",pL:18,pV:19,visitante:"CASI",bL:false,bV:false},
  {id:"25_20_4",t:2025,f:20,d:"2025-09-27",local:"Newman",pL:35,pV:25,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"25_20_5",t:2025,f:20,d:"2025-09-27",local:"Hindú",pL:27,pV:3,visitante:"CUBA",bL:true,bV:false},
  {id:"25_20_6",t:2025,f:20,d:"2025-09-27",local:"Buenos Aires",pL:13,pV:12,visitante:"La Plata",bL:false,bV:false},
  {id:"25_21_1",t:2025,f:21,d:"2025-10-04",local:"Alumni",pL:50,pV:19,visitante:"La Plata",bL:true,bV:false},
  {id:"25_21_2",t:2025,f:21,d:"2025-10-04",local:"CUBA",pL:42,pV:23,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"25_21_3",t:2025,f:21,d:"2025-10-04",local:"Belgrano Ath.",pL:43,pV:27,visitante:"Hindú",bL:true,bV:false},
  {id:"25_21_4",t:2025,f:21,d:"2025-10-04",local:"CASI",pL:26,pV:16,visitante:"Newman",bL:false,bV:false},
  {id:"25_21_5",t:2025,f:21,d:"2025-10-04",local:"San Luis",pL:9,pV:13,visitante:"Los Tilos",bL:false,bV:false},
  {id:"25_21_6",t:2025,f:21,d:"2025-10-04",local:"Regatas",pL:15,pV:19,visitante:"SIC",bL:false,bV:false},
  {id:"25_22_1",t:2025,f:22,d:"2025-10-11",local:"SIC",pL:44,pV:47,visitante:"Alumni",bL:false,bV:false},
  {id:"25_22_2",t:2025,f:22,d:"2025-10-11",local:"Los Tilos",pL:37,pV:39,visitante:"Regatas",bL:false,bV:true},
  {id:"25_22_3",t:2025,f:22,d:"2025-10-11",local:"Newman",pL:29,pV:26,visitante:"San Luis",bL:false,bV:false},
  {id:"25_22_4",t:2025,f:22,d:"2025-10-11",local:"Hindú",pL:46,pV:7,visitante:"CASI",bL:true,bV:false},
  {id:"25_22_5",t:2025,f:22,d:"2025-10-11",local:"Buenos Aires",pL:39,pV:14,visitante:"Belgrano Ath.",bL:true,bV:false},
  {id:"25_22_6",t:2025,f:22,d:"2025-10-11",local:"La Plata",pL:28,pV:33,visitante:"CUBA",bL:false,bV:false},
  // ── 2026 ─────────────────────────────────────────────────
  {id:"26_01_1",t:2026,f:1,d:"2026-03-14",local:"Los Matreros",pL:27,pV:25,visitante:"Regatas",bL:false,bV:false},
  {id:"26_01_2",t:2026,f:1,d:"2026-03-14",local:"La Plata",pL:29,pV:36,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"26_01_3",t:2026,f:1,d:"2026-03-14",local:"Hindú",pL:52,pV:18,visitante:"Los Tilos",bL:true,bV:false},
  {id:"26_01_4",t:2026,f:1,d:"2026-03-14",local:"Champagnat",pL:16,pV:40,visitante:"CASI",bL:false,bV:true},
  {id:"26_01_5",t:2026,f:1,d:"2026-03-14",local:"Alumni",pL:27,pV:25,visitante:"CUBA",bL:false,bV:false},
  {id:"26_01_6",t:2026,f:1,d:"2026-03-14",local:"Newman",pL:31,pV:3,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"26_01_7",t:2026,f:1,d:"2026-03-14",local:"SIC",pL:58,pV:18,visitante:"Belgrano Ath.",bL:true,bV:false},
  {id:"26_02_1",t:2026,f:2,d:"2026-03-21",local:"SIC",pL:25,pV:20,visitante:"Los Matreros",bL:false,bV:false},
  {id:"26_02_2",t:2026,f:2,d:"2026-03-21",local:"Belgrano Ath.",pL:25,pV:33,visitante:"Newman",bL:false,bV:false},
  {id:"26_02_3",t:2026,f:2,d:"2026-03-21",local:"Buenos Aires",pL:20,pV:15,visitante:"Alumni",bL:false,bV:false},
  {id:"26_02_4",t:2026,f:2,d:"2026-03-21",local:"CUBA",pL:25,pV:29,visitante:"Champagnat",bL:false,bV:false},
  {id:"26_02_5",t:2026,f:2,d:"2026-03-21",local:"CASI",pL:12,pV:15,visitante:"Hindú",bL:false,bV:false},
  {id:"26_02_6",t:2026,f:2,d:"2026-03-21",local:"Los Tilos",pL:17,pV:13,visitante:"La Plata",bL:false,bV:false},
  {id:"26_02_7",t:2026,f:2,d:"2026-03-21",local:"Atl. del Rosario",pL:12,pV:20,visitante:"Regatas",bL:false,bV:true},
  {id:"26_03_1",t:2026,f:3,d:"2026-03-28",local:"Los Matreros",pL:25,pV:22,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"26_03_2",t:2026,f:3,d:"2026-03-28",local:"Regatas",pL:29,pV:20,visitante:"Los Tilos",bL:false,bV:false},
  {id:"26_03_3",t:2026,f:3,d:"2026-03-28",local:"La Plata",pL:13,pV:39,visitante:"CASI",bL:false,bV:true},
  {id:"26_03_4",t:2026,f:3,d:"2026-03-28",local:"Hindú",pL:43,pV:36,visitante:"CUBA",bL:true,bV:false},
  {id:"26_03_5",t:2026,f:3,d:"2026-03-28",local:"Champagnat",pL:13,pV:10,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"26_03_6",t:2026,f:3,d:"2026-03-28",local:"Alumni",pL:26,pV:21,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"26_03_7",t:2026,f:3,d:"2026-03-28",local:"Newman",pL:10,pV:37,visitante:"SIC",bL:false,bV:true},
  {id:"26_04_1",t:2026,f:4,d:"2026-04-11",local:"Newman",pL:52,pV:28,visitante:"Los Matreros",bL:true,bV:false},
  {id:"26_04_2",t:2026,f:4,d:"2026-04-11",local:"SIC",pL:33,pV:23,visitante:"Alumni",bL:false,bV:false},
  {id:"26_04_3",t:2026,f:4,d:"2026-04-11",local:"Belgrano Ath.",pL:24,pV:30,visitante:"Champagnat",bL:false,bV:false},
  {id:"26_04_4",t:2026,f:4,d:"2026-04-11",local:"Buenos Aires",pL:12,pV:34,visitante:"Hindú",bL:false,bV:true},
  {id:"26_04_5",t:2026,f:4,d:"2026-04-11",local:"CUBA",pL:33,pV:35,visitante:"La Plata",bL:false,bV:false},
  {id:"26_04_6",t:2026,f:4,d:"2026-04-11",local:"CASI",pL:38,pV:14,visitante:"Regatas",bL:false,bV:false},
  {id:"26_04_7",t:2026,f:4,d:"2026-04-11",local:"Los Tilos",pL:32,pV:39,visitante:"Atl. del Rosario",bL:false,bV:false},
  {id:"26_05_1",t:2026,f:5,d:"2026-04-18",local:"Los Matreros",pL:23,pV:32,visitante:"Los Tilos",bL:false,bV:false},
  {id:"26_05_2",t:2026,f:5,d:"2026-04-18",local:"Atl. del Rosario",pL:31,pV:36,visitante:"CASI",bL:false,bV:false},
  {id:"26_05_3",t:2026,f:5,d:"2026-04-18",local:"Regatas",pL:26,pV:23,visitante:"CUBA",bL:false,bV:false},
  {id:"26_05_4",t:2026,f:5,d:"2026-04-18",local:"La Plata",pL:23,pV:25,visitante:"Buenos Aires",bL:false,bV:false},
  {id:"26_05_5",t:2026,f:5,d:"2026-04-18",local:"Hindú",pL:39,pV:22,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"26_05_6",t:2026,f:5,d:"2026-04-18",local:"Champagnat",pL:7,pV:24,visitante:"SIC",bL:false,bV:false},
  {id:"26_05_7",t:2026,f:5,d:"2026-04-18",local:"Alumni",pL:30,pV:32,visitante:"Newman",bL:false,bV:false},
  {id:"26_06_1",t:2026,f:6,d:"2026-04-25",local:"Alumni",pL:18,pV:23,visitante:"Los Matreros",bL:false,bV:false},
  {id:"26_06_2",t:2026,f:6,d:"2026-04-25",local:"Newman",pL:47,pV:8,visitante:"Champagnat",bL:true,bV:false},
  {id:"26_06_3",t:2026,f:6,d:"2026-04-25",local:"SIC",pL:31,pV:32,visitante:"Hindú",bL:false,bV:false},
  {id:"26_06_4",t:2026,f:6,d:"2026-04-25",local:"Belgrano Ath.",pL:28,pV:19,visitante:"La Plata",bL:false,bV:false},
  {id:"26_06_5",t:2026,f:6,d:"2026-04-25",local:"Buenos Aires",pL:26,pV:32,visitante:"Regatas",bL:false,bV:true},
  {id:"26_06_6",t:2026,f:6,d:"2026-04-25",local:"CUBA",pL:43,pV:17,visitante:"Atl. del Rosario",bL:true,bV:false},
  {id:"26_06_7",t:2026,f:6,d:"2026-04-25",local:"CASI",pL:33,pV:31,visitante:"Los Tilos",bL:false,bV:false},
  {id:"26_07_1",t:2026,f:7,d:"2026-05-09",local:"Los Matreros",pL:24,pV:48,visitante:"CASI",bL:false,bV:true},
  {id:"26_07_2",t:2026,f:7,d:"2026-05-09",local:"Los Tilos",pL:33,pV:42,visitante:"CUBA",bL:false,bV:false},
  {id:"26_07_3",t:2026,f:7,d:"2026-05-09",local:"Atl. del Rosario",pL:59,pV:28,visitante:"Buenos Aires",bL:true,bV:false},
  {id:"26_07_4",t:2026,f:7,d:"2026-05-09",local:"Regatas",pL:13,pV:15,visitante:"Belgrano Ath.",bL:false,bV:false},
  {id:"26_07_5",t:2026,f:7,d:"2026-05-09",local:"La Plata",pL:31,pV:38,visitante:"SIC",bL:false,bV:false},
  {id:"26_07_6",t:2026,f:7,d:"2026-05-09",local:"Hindú",pL:25,pV:26,visitante:"Newman",bL:false,bV:false},
  {id:"26_07_7",t:2026,f:7,d:"2026-05-09",local:"Champagnat",pL:7,pV:76,visitante:"Alumni",bL:false,bV:true},
];

const COLS = {
  "Newman":"#1a1a2e","SIC":"#0f3460","Hindú":"#16213e","CASI":"#533483",
  "Alumni":"#d62828","CUBA":"#023e8a","Los Tilos":"#2d6a4f","La Plata":"#1b4332",
  "Champagnat":"#6d4c41","Regatas":"#0077b6","Belgrano Ath.":"#e76f51",
  "Buenos Aires":"#457b9d","Los Matreros":"#6a0572","Atl. del Rosario":"#7b2d8b",
  "San Luis":"#b5451b","Pucara":"#c0392b",
};
const gc = eq => COLS[eq] || "#334155";

// Equipos con mayor impacto del SRA (pierden jugadores clave mar-jul)
const SRA_HEAVY = ["Newman","SIC","Hindú","CASI","Alumni","Belgrano Ath.","Los Tilos","Regatas","CUBA"];
// Equipos ascendidos en 2026
const ASCENDED_2026 = ["Los Matreros","Atl. del Rosario"];

function calcELO(arr) {
  const e = {};
  [...arr].sort((a,b)=>a.t-b.t||a.f-b.f).forEach(p=>{
    if(!e[p.local])e[p.local]=1500; if(!e[p.visitante])e[p.visitante]=1500;
    const eL=e[p.local],eV=e[p.visitante],K=32;
    const ex=1/(1+Math.pow(10,(eV-eL)/400));
    const r=p.pL>p.pV?1:p.pL<p.pV?0:0.5;
    e[p.local]=eL+K*(r-ex); e[p.visitante]=eV+K*((1-r)-(1-ex));
  });
  return e;
}

function calcHomeStats(arr) {
  // Calcula % victorias de local y visitante por equipo
  const stats = {};
  arr.forEach(p => {
    if(!stats[p.local])  stats[p.local]  = {pjL:0,pgL:0,pjV:0,pgV:0};
    if(!stats[p.visitante]) stats[p.visitante] = {pjL:0,pgL:0,pjV:0,pgV:0};
    stats[p.local].pjL++;
    stats[p.visitante].pjV++;
    if(p.pL > p.pV) stats[p.local].pgL++;
    else if(p.pV > p.pL) stats[p.visitante].pgV++;
  });
  // Calcula porcentajes y ventaja de local
  const result = {};
  let totalPjL=0, totalPgL=0;
  Object.entries(stats).forEach(([eq,s]) => {
    const pctL = s.pjL >= 5 ? s.pgL/s.pjL : null; // min 5 partidos para ser confiable
    const pctV = s.pjV >= 5 ? s.pgV/s.pjV : null;
    result[eq] = { pjL:s.pjL, pgL:s.pgL, pjV:s.pjV, pgV:s.pgV, pctL, pctV };
    totalPjL += s.pjL; totalPgL += s.pgL;
  });
  const globalPctL = totalPgL/totalPjL; // % global de victorias de local
  return { byTeam: result, globalPctL };
}

function calcTabla(arr) {
  const t={};
  arr.forEach(p=>{
    [p.local,p.visitante].forEach(q=>{if(!t[q])t[q]={eq:q,PJ:0,PG:0,PE:0,PP:0,PF:0,PC:0,BP:0,Pts:0};});
    const w=p.pL>p.pV,dr=p.pL===p.pV;
    t[p.local].PJ++;t[p.visitante].PJ++;
    t[p.local].PF+=p.pL;t[p.local].PC+=p.pV;
    t[p.visitante].PF+=p.pV;t[p.visitante].PC+=p.pL;
    if(p.bL){t[p.local].BP++;t[p.local].Pts++;}
    if(p.bV){t[p.visitante].BP++;t[p.visitante].Pts++;}
    if(dr){t[p.local].PE++;t[p.visitante].PE++;t[p.local].Pts+=2;t[p.visitante].Pts+=2;}
    else if(w){
      t[p.local].PG++;t[p.visitante].PP++;t[p.local].Pts+=4;
      if(p.pV>=p.pL-7){t[p.visitante].Pts++;t[p.visitante].BP++;}
    } else {
      t[p.visitante].PG++;t[p.local].PP++;t[p.visitante].Pts+=4;
      if(p.pL>=p.pV-7){t[p.local].Pts++;t[p.local].BP++;}
    }
  });
  return Object.values(t).sort((a,b)=>b.Pts-a.Pts||(b.PF-b.PC)-(a.PF-a.PC));
}

function weightedMomentum(eq, arr) {
  // Solo partidos del torneo en curso (año más reciente con datos)
  const currentYear = Math.max(...arr.map(p=>p.t));
  const hist=[...arr].filter(p=>p.t===currentYear)
    .sort((a,b)=>b.f-a.f)
    .filter(p=>p.local===eq||p.visitante===eq).slice(0,5);
  const W=[5,4,3,2,1]; let score=0,total=0;
  hist.forEach((p,i)=>{
    const w=W[i], won=p.local===eq?p.pL>p.pV:p.pV>p.pL, drew=p.pL===p.pV;
    score+=w*(won?1:drew?0.5:0); total+=w;
  });
  // Si hay pocos partidos en el torneo actual, el momentum se acerca al 50%
  // (poca info = poca confianza)
  const raw = total>0?score/total:0.5;
  const confidence = Math.min(hist.length/5, 1); // 0 a 1 según cuántos partidos hay
  return 0.5 + (raw-0.5)*confidence;
}

function getForma(eq, arr) {
  // Solo partidos del torneo en curso
  const currentYear = Math.max(...arr.map(p=>p.t));
  return [...arr].filter(p=>p.t===currentYear)
    .sort((a,b)=>b.f-a.f)
    .filter(p=>p.local===eq||p.visitante===eq).slice(0,5)
    .map(p=>p.local===eq?(p.pL>p.pV?"G":p.pL<p.pV?"P":"E"):(p.pV>p.pL?"G":p.pV<p.pL?"P":"E"));
}

function getCurrentFecha(arr) {
  const t26=arr.filter(p=>p.t===2026);
  return t26.length>0?Math.max(...t26.map(p=>p.f)):1;
}

function calcPred(e1, e2, arr, elos, homeStats, fechaForm, lluvia) {
  if(!e1||!e2||e1===e2) return null;
  const eL=elos[e1]||1500, eV=elos[e2]||1500;
  let p=100/(1+Math.pow(10,(eV-eL)/400));

  // Momentum ponderado (últimos 5, peso decreciente)
  const mL=weightedMomentum(e1,arr), mV=weightedMomentum(e2,arr);
  const momAdj=(mL-mV)*12;
  p+=momAdj;

  // Factor localía específico por equipo (dinámico)
  let homeAdj = 0;
  let homeNote = null;
  if(homeStats) {
    const { byTeam, globalPctL } = homeStats;
    const hL = byTeam[e1];
    const hV = byTeam[e2];
    // Solo aplicar si hay suficientes datos (min 5 partidos de local/visita)
    const pctL = hL && hL.pctL !== null ? hL.pctL : globalPctL;
    const pctV = hV && hV.pctV !== null ? hV.pctV : (1 - globalPctL);
    // Ajuste: diferencia entre rendimiento local del equipo 1 vs promedio global
    // + diferencia entre rendimiento visitante del equipo 2 vs promedio global
    const adjL = (pctL - globalPctL) * 20;  // max ~±10pts si 50% diferencia
    const adjV = ((1-globalPctL) - pctV) * 20; // equipo visitante fuerte en visita => reduce ventaja local
    homeAdj = Math.round((adjL + adjV) * 10) / 10;
    p += homeAdj;
    if(Math.abs(homeAdj) >= 2) {
      homeNote = homeAdj > 0
        ? e1 + " tiene ventaja de local por encima del promedio (+" + homeAdj.toFixed(1) + "pts)"
        : e2 + " rinde bien de visitante (ajuste " + homeAdj.toFixed(1) + "pts)";
    }
  }

  // Etapa del torneo
  const fecha=getCurrentFecha(arr);
  // Etapas del torneo — 5 etapas que reflejan la realidad del URBA
  // F1-6:  Primera rueda — variabilidad alta, equipos sin ritmo, SRA activo
  // F7-12: Segunda rueda — patrones establecidos, SRA todavía activo
  // F13:   Punto de inflexión — regresan jugadores del SRA
  // F13-19: Tercera rueda — planteles completos, datos confiables
  // F20-26: Definición — presión máxima, juegan por clasificación o salvación
  const stage = fecha<=6 ? "Primera rueda"
              : fecha<=12 ? "Segunda rueda"
              : fecha<=19 ? "Tercera rueda"
              : "Definición";

  if(fecha<=6)       p = p+(50-p)*0.25;  // Alta variabilidad → acercar al 50%
  else if(fecha<=12) p = p+(50-p)*0.10;  // Variabilidad media → leve corrección
  else if(fecha<=19) p = p+(p-50)*0.05;  // Planteles completos → leve amplificación
  else               p = p+(p-50)*0.15;  // Definición → amplificar diferencias

  // Factor SRA (activo marzo-julio)
  const totalF=arr.filter(p=>p.t===2026).length>0?Math.max(...arr.filter(p=>p.t===2026).map(p=>p.f)):1;
const month=new Date().getMonth()+1;
  const sraActive=month>=3&&month<=7;
  let sraNote=[];
  if(sraActive){
    if(SRA_HEAVY.includes(e1)){p-=4;sraNote.push(e1+" pierde jugadores por SRA");}
    if(SRA_HEAVY.includes(e2)){p+=4;sraNote.push(e2+" pierde jugadores por SRA");}
  }

  // Factor ascenso (penalidad progresiva)
  const ascPen=fecha<=6?0:fecha<=11?6:fecha<=16?11:16;
  let ascNote=[];
  if(ASCENDED_2026.includes(e1)){p-=ascPen;if(ascPen>0)ascNote.push(e1+": equipo ascendido (-"+ascPen+"pts)");}
  if(ASCENDED_2026.includes(e2)){p+=ascPen;if(ascPen>0)ascNote.push(e2+": equipo ascendido (-"+ascPen+"pts)");}

  // Factor IFF — Índice de Fortaleza de Formación
  // Solo activa con 2+ bajas en posiciones clave (2,8,9,10,15)
  let iffNote = [];
  let iffPenL = 0, iffPenV = 0;
  if(fechaForm && FORMACIONES && FORMACIONES[fechaForm]) {
    const iffL = calcIFF(e1, fechaForm);
    const iffV = calcIFF(e2, fechaForm);
    if(iffL.activo) {
      iffPenL = iffL.pen;
      p += iffL.pen; // penalidad negativa para el local
      iffNote.push("⚡ IFF " + e1 + ": " + iffL.bajas.length + " bajas clave (" + iffL.bajas.map(b=>b.posNombre).join(", ") + ") → " + iffL.pen + " pts");
    }
    if(iffV.activo) {
      iffPenV = iffV.pen;
      p -= iffV.pen; // penalidad del visitante favorece al local
      iffNote.push("⚡ IFF " + e2 + ": " + iffV.bajas.length + " bajas clave (" + iffV.bajas.map(b=>b.posNombre).join(", ") + ") → " + iffV.pen + " pts");
    }
  }

  // Factor lluvia — acerca las probabilidades al 50% (partidos más cerrados)
  if(lluvia) p = p+(50-p)*0.15;

  p=Math.max(5,Math.min(95,p));

  const h=arr.filter(p2=>(p2.local===e1&&p2.visitante===e2)||(p2.local===e2&&p2.visitante===e1));
  const g1H=h.filter(p2=>p2.local===e1?p2.pL>p2.pV:p2.pV>p2.pL).length;
  const pjL=arr.filter(p2=>p2.local===e1||p2.visitante===e1).length||1;
  const pjV=arr.filter(p2=>p2.local===e2||p2.visitante===e2).length||1;
  const bPctL=Math.round(100*arr.filter(p2=>(p2.local===e1&&p2.bL)||(p2.visitante===e1&&p2.bV)).length/pjL);
  const bPctV=Math.round(100*arr.filter(p2=>(p2.local===e2&&p2.bL)||(p2.visitante===e2&&p2.bV)).length/pjV);

  return {
    probL:Math.round(p),probV:Math.round(100-p),
    eL,eV,f1:getForma(e1,arr),f2:getForma(e2,arr),
    w1:getForma(e1,arr).filter(x=>x==="G").length,
    w2:getForma(e2,arr).filter(x=>x==="G").length,
    mPctL:Math.round(mL*100),mPctV:Math.round(mV*100),
    h2hTotal:h.length,g1H,g2H:h.length-g1H,
    bPctL,bPctV,stage,fecha,sraActive,sraNote,ascNote,
    momAdj:Math.round(momAdj),homeAdj,homeNote,
    iffNote,iffPenL,iffPenV,
  };
}

// ── UI HELPERS ────────────────────────────────────────────────
function Bar({pct,color}){return <div style={{background:"#e5e7eb",borderRadius:6,height:8,overflow:"hidden",width:"100%"}}><div style={{width:Math.min(pct||0,100)+"%",height:"100%",background:color||"#0f3460",borderRadius:6}}/></div>;}
function Bdg({r}){let bg="#9ca3af",l="E";if(r==="G"){bg="#16a34a";l="G";}else if(r==="P"){bg="#dc2626";l="P";}return <span style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:22,height:22,borderRadius:"50%",background:bg,color:"#fff",fontSize:11,fontWeight:700}}>{l}</span>;}
function Dot({eq,size}){return <span style={{display:"inline-block",width:size||10,height:size||10,borderRadius:"50%",background:gc(eq),flexShrink:0}}/>;}
function BB(){return <span style={{background:"#dc2626",color:"#fff",fontSize:9,fontWeight:700,padding:"1px 4px",borderRadius:3,marginLeft:2}}>B</span>;}

// ── WEATHER WIDGET ────────────────────────────────────────────


// ── TAB COMPONENTS ────────────────────────────────────────────
function TabResultados({pFilt}) {
  const fechas=[...new Set(pFilt.map(p=>p.f))].sort((a,b)=>b-a);
  return (
    <div>
      {fechas.map(f=>(
        <div key={f} style={{marginBottom:24}}>
          <div style={S.secTitle}>Fecha {f}</div>
          <div style={S.grid2}>
            {pFilt.filter(p=>p.f===f).map(p=>{
              const gL=p.pL>p.pV;
              return (
                <div key={p.id} style={S.card}>
                  <div style={Object.assign({},S.mt,gL?{fontWeight:700}:{})}>
                    <Dot eq={p.local}/><span style={{flex:1,fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.local}</span>{p.bL&&<BB/>}<span style={S.ms}>{p.pL}</span>
                  </div>
                  <div style={{color:"#bbb",fontSize:10,fontWeight:700}}>VS</div>
                  <div style={Object.assign({},S.mt,!gL&&p.pL!==p.pV?{fontWeight:700}:{})}>
                    <Dot eq={p.visitante}/><span style={{flex:1,fontSize:12,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{p.visitante}</span>{p.bV&&<BB/>}<span style={S.ms}>{p.pV}</span>
                  </div>
                  <div style={{fontSize:11,color:"#94a3b8",minWidth:32,textAlign:"right"}}>{Math.abs(p.pL-p.pV)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function TabTabla({tabla,pFilt,equipos,arr}) {
  return (
    <div>
      <div style={{overflowX:"auto"}}>
        <table style={S.tbl}>
          <thead><tr style={{background:"#0f2027"}}>
            {["#","Equipo","PJ","PG","PE","PP","PF","PC","Dif","BP","Pts"].map(h=>(
              <th key={h} style={Object.assign({},S.th,h==="Equipo"?{textAlign:"left"}:{},h==="Pts"?{background:"#1a3a5c",color:"#a3c4f3"}:{},h==="BP"?{background:"#3a1a1a",color:"#fca5a5"}:{})}>{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {tabla.map((r,i)=>{
              const dif=r.PF-r.PC;
              return (
                <tr key={r.eq} style={Object.assign({},S.tr,i<4?{background:"#f0f9ff"}:{},i===0?{background:"#e0f2fe"}:{})}>
                  <td style={Object.assign({},S.td,{color:"#94a3b8",fontWeight:700,width:24})}>{i+1}</td>
                  <td style={Object.assign({},S.td,{textAlign:"left"})}>
                    <div style={{display:"flex",alignItems:"center",gap:5}}>
                      <Dot eq={r.eq}/>{r.eq}
                      {ASCENDED_2026.includes(r.eq)&&<span style={{fontSize:9,background:"#fef3c7",color:"#92400e",padding:"1px 4px",borderRadius:3,marginLeft:2}}>ASC</span>}
                    </div>
                  </td>
                  {["PJ","PG","PE","PP","PF","PC"].map(k=><td key={k} style={S.td}>{r[k]}</td>)}
                  <td style={Object.assign({},S.td,{color:dif>=0?"#16a34a":"#dc2626",fontWeight:600})}>{dif>0?"+":""}{dif}</td>
                  <td style={Object.assign({},S.td,{color:"#dc2626",fontWeight:600})}>{r.BP}</td>
                  <td style={Object.assign({},S.td,{fontWeight:800,color:"#0f3460",fontSize:15})}>{r.Pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{fontSize:11,color:"#94a3b8",textAlign:"right",marginTop:4}}>4 pts victoria · 2 pts empate · BP: bonus ofensivo/defensivo = +1 pt · ASC: equipo ascendido</div>
      <div style={S.secTitle}>Forma reciente (peso mayor a partidos más recientes)</div>
      <div style={S.grid2}>
        {equipos.map(eq=>{
          const fm=getForma(eq,arr); if(!fm.length)return null;
          const mom=Math.round(weightedMomentum(eq,arr)*100);
          return (
            <div key={eq} style={Object.assign({},S.card,{justifyContent:"space-between"})}>
              <div style={{display:"flex",alignItems:"center",gap:5}}><Dot eq={eq}/><span style={{fontSize:12,fontWeight:500}}>{eq}</span></div>
              <div style={{display:"flex",gap:3,alignItems:"center"}}>
                {fm.map((r,i)=><Bdg key={i} r={r}/>)}
                {Array.from({length:5-fm.length}).map((_,i)=><span key={i} style={{width:22,height:22,borderRadius:"50%",background:"#e5e7eb",display:"inline-block"}}/>)}
                <span style={{fontSize:11,color:"#64748b",marginLeft:4,minWidth:32}}>{mom}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TabLocalia({locStats,tabla,pFilt,elos,homeStats}) {
  const [equipoSel, setEquipoSel] = useState("");
  const equipos = [...new Set(pFilt.map(p=>p.local))].sort();

  const statsEquipo = useMemo(()=>{
    if(!equipoSel) return null;
    const comoLocal   = pFilt.filter(p=>p.local===equipoSel);
    const comoVisita  = pFilt.filter(p=>p.visitante===equipoSel);
    const pgL = comoLocal.filter(p=>p.pL>p.pV).length;
    const pgV = comoVisita.filter(p=>p.pV>p.pL).length;
    const pfL = comoLocal.reduce((s,p)=>s+p.pL,0);
    const pcL = comoLocal.reduce((s,p)=>s+p.pV,0);
    const pfV = comoVisita.reduce((s,p)=>s+p.pV,0);
    const pcV = comoVisita.reduce((s,p)=>s+p.pL,0);
    return {
      local: { pj:comoLocal.length, pg:pgL, pct:comoLocal.length?Math.round(100*pgL/comoLocal.length):0,
               pfProm:comoLocal.length?(pfL/comoLocal.length).toFixed(1):0,
               pcProm:comoLocal.length?(pcL/comoLocal.length).toFixed(1):0,
               partidos: comoLocal.sort((a,b)=>b.t-a.t||b.f-a.f) },
      visita: { pj:comoVisita.length, pg:pgV, pct:comoVisita.length?Math.round(100*pgV/comoVisita.length):0,
                pfProm:comoVisita.length?(pfV/comoVisita.length).toFixed(1):0,
                pcProm:comoVisita.length?(pcV/comoVisita.length).toFixed(1):0,
                partidos: comoVisita.sort((a,b)=>b.t-a.t||b.f-a.f) },
    };
  },[equipoSel, pFilt]);

  return (
    <div>
      {/* Selector de equipo */}
      <div style={{marginBottom:20,display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontSize:13,color:"#64748b",fontWeight:600}}>Ver equipo:</span>
        <select value={equipoSel} onChange={e=>setEquipoSel(e.target.value)} style={S.sellg}>
          <option value="">— Seleccioná un equipo —</option>
          {equipos.map(e=><option key={e} value={e}>{e}</option>)}
        </select>
        {equipoSel&&<button onClick={()=>setEquipoSel("")}
          style={{padding:"6px 12px",borderRadius:6,border:"1px solid #e2e8f0",background:"#f8fafc",
            cursor:"pointer",fontSize:12,color:"#64748b",fontFamily:"inherit"}}>✕ Limpiar</button>}
      </div>

      {/* Vista detallada del equipo seleccionado */}
      {equipoSel&&statsEquipo&&(
        <div style={{marginBottom:24}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:14}}>
            <Dot eq={equipoSel} size={12}/>
            <span style={{fontSize:16,fontWeight:700,color:"#0f2027"}}>{equipoSel}</span>
            <span style={{fontSize:12,color:"#64748b"}}>· ELO {Math.round(elos[equipoSel]||1500)}</span>
          </div>
          <div style={S.grid2}>
            {/* Card local */}
            <div style={{background:"#f0fdf4",border:"2px solid #16a34a",borderRadius:10,padding:"14px 16px"}}>
              <div style={{fontSize:11,fontWeight:700,color:"#166534",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🏠 De local</div>
              <div style={{fontSize:32,fontWeight:800,color:"#16a34a",marginBottom:2}}>{statsEquipo.local.pct}%</div>
              <div style={{fontSize:12,color:"#374151",marginBottom:8}}>{statsEquipo.local.pg} victorias de {statsEquipo.local.pj} partidos</div>
              <div style={{fontSize:11,color:"#64748b"}}>Promedio: <b>{statsEquipo.local.pfProm}</b> pts a favor / <b>{statsEquipo.local.pcProm}</b> en contra</div>
              <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:4}}>
                {statsEquipo.local.partidos.slice(0,5).map(p=>{
                  const gan=p.pL>p.pV;
                  return <div key={p.id} style={{display:"flex",gap:6,fontSize:11,alignItems:"center"}}>
                    <span style={{color:"#94a3b8",minWidth:40}}>{p.t} F{p.f}</span>
                    <span style={{flex:1}}>vs {p.visitante}</span>
                    <span style={{fontWeight:700,color:gan?"#16a34a":"#dc2626"}}>{p.pL}-{p.pV}</span>
                    <span style={{fontSize:10,padding:"1px 5px",borderRadius:3,background:gan?"#dcfce7":"#fee2e2",color:gan?"#166534":"#991b1b",fontWeight:600}}>{gan?"G":"P"}</span>
                  </div>;
                })}
              </div>
            </div>
            {/* Card visitante */}
            <div style={{background:"#fff7ed",border:"2px solid #f97316",borderRadius:10,padding:"14px 16px"}}>
              <div style={{fontSize:11,fontWeight:700,color:"#c2410c",textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>✈️ De visitante</div>
              <div style={{fontSize:32,fontWeight:800,color:"#f97316",marginBottom:2}}>{statsEquipo.visita.pct}%</div>
              <div style={{fontSize:12,color:"#374151",marginBottom:8}}>{statsEquipo.visita.pg} victorias de {statsEquipo.visita.pj} partidos</div>
              <div style={{fontSize:11,color:"#64748b"}}>Promedio: <b>{statsEquipo.visita.pfProm}</b> pts a favor / <b>{statsEquipo.visita.pcProm}</b> en contra</div>
              <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:4}}>
                {statsEquipo.visita.partidos.slice(0,5).map(p=>{
                  const gan=p.pV>p.pL;
                  return <div key={p.id} style={{display:"flex",gap:6,fontSize:11,alignItems:"center"}}>
                    <span style={{color:"#94a3b8",minWidth:40}}>{p.t} F{p.f}</span>
                    <span style={{flex:1}}>vs {p.local}</span>
                    <span style={{fontWeight:700,color:gan?"#16a34a":"#dc2626"}}>{p.pV}-{p.pL}</span>
                    <span style={{fontSize:10,padding:"1px 5px",borderRadius:3,background:gan?"#dcfce7":"#fee2e2",color:gan?"#166534":"#991b1b",fontWeight:600}}>{gan?"G":"P"}</span>
                  </div>;
                })}
              </div>
            </div>
          </div>
          <div style={{height:1,background:"#e2e8f0",margin:"20px 0"}}/>
        </div>
      )}

      <div style={S.grid2}>
        <div style={S.kpi}><div style={S.kpiL}>Victorias de local</div><div style={Object.assign({},S.kpiV,{color:"#16a34a"})}>{locStats.local.pct}%</div><Bar pct={locStats.local.pct} color="#16a34a"/><div style={S.kpiSb}>{locStats.local.PG}/{locStats.local.PJ} partidos · {locStats.local.avg} pts prom.</div></div>
        <div style={S.kpi}><div style={S.kpiL}>Victorias de visitante</div><div style={Object.assign({},S.kpiV,{color:"#dc2626"})}>{locStats.visit.pct}%</div><Bar pct={locStats.visit.pct} color="#dc2626"/><div style={S.kpiSb}>{locStats.visit.PG}/{locStats.visit.PJ} partidos · {locStats.visit.avg} pts prom.</div></div>
      </div>
      <div style={S.secTitle}>Rendimiento de local por equipo</div>
      <div style={{overflowX:"auto"}}>
        <table style={S.tbl}>
          <thead><tr style={{background:"#0f2027"}}>
            {["Equipo","PJ L","PG L","Pts prom.","% local","% visita","Ventaja","ELO"].map(h=><th key={h} style={Object.assign({},S.th,h==="Equipo"?{textAlign:"left"}:{})}>{h}</th>)}
          </tr></thead>
          <tbody>
            {[...tabla].sort((a,b)=>{
              const pjA=pFilt.filter(p=>p.local===a.eq).length||1;
              const pjB=pFilt.filter(p=>p.local===b.eq).length||1;
              return pFilt.filter(p=>p.local===b.eq&&p.pL>p.pV).length/pjB-pFilt.filter(p=>p.local===a.eq&&p.pL>p.pV).length/pjA;
            }).map(r=>{
              const pjL=pFilt.filter(p=>p.local===r.eq).length;
              const pgL=pFilt.filter(p=>p.local===r.eq&&p.pL>p.pV).length;
              const pfL=pFilt.filter(p=>p.local===r.eq).reduce((s,p)=>s+p.pL,0);
              const bL=pFilt.filter(p=>p.local===r.eq&&p.bL).length;
              const pct=pjL?Math.round(100*pgL/pjL):0;
              return (
                <tr key={r.eq} style={S.tr}>
                  <td style={Object.assign({},S.td,{textAlign:"left"})}><div style={{display:"flex",alignItems:"center",gap:5}}><Dot eq={r.eq}/>{r.eq}</div></td>
                  <td style={S.td}>{pjL}</td><td style={S.td}>{pgL}</td>
                  <td style={S.td}>{pjL?(pfL/pjL).toFixed(1):"-"}</td>
                  <td style={Object.assign({},S.td,{minWidth:100})}>
                    <div style={{display:"flex",alignItems:"center",gap:5}}><div style={{flex:1}}><Bar pct={pct} color={pct>=50?"#16a34a":"#f97316"}/></div><span style={{fontSize:12,minWidth:30}}>{pct}%</span></div>
                  </td>
                  <td style={Object.assign({},S.td,{color:"#dc2626",fontWeight:600})}>{bL}</td>
                  {(()=>{
                    const hs = homeStats && homeStats.byTeam[r.eq];
                    const pctV = hs && hs.pjV>0 ? Math.round(100*hs.pgV/hs.pjV) : null;
                    const ventaja = pctV!==null ? pct-pctV : null;
                    return (<>
                      <td style={S.td}>{pctV!==null?pctV+"%":"—"}</td>
                      <td style={Object.assign({},S.td,{fontWeight:600,color:ventaja>20?"#16a34a":ventaja<0?"#dc2626":"#374151"})}>
                        {ventaja!==null?(ventaja>0?"+":"")+ventaja+"%":"—"}
                      </td>
                    </>);
                  })()}
                  <td style={Object.assign({},S.td,{fontWeight:700,color:"#0f3460"})}>{Math.round(elos[r.eq]||1500)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TabH2H({arr,equipos}) {
  const [e1,setE1]=useState(""); const [e2,setE2]=useState("");
  const h2hP=useMemo(()=>{
    if(!e1||!e2)return[];
    return arr.filter(p=>(p.local===e1&&p.visitante===e2)||(p.local===e2&&p.visitante===e1)).sort((a,b)=>b.t-a.t||b.f-a.f);
  },[arr,e1,e2]);
  const res=useMemo(()=>{
    let g1=0,g2=0,emp=0,sum=0;
    h2hP.forEach(p=>{const d=p.local===e1?p.pL-p.pV:p.pV-p.pL;if(d>0)g1++;else if(d<0)g2++;else emp++;sum+=d;});
    return{g1,g2,emp,avg:h2hP.length?(sum/h2hP.length).toFixed(1):0};
  },[h2hP,e1,e2]);
  return (
    <div>
      <div style={{display:"flex",gap:12,alignItems:"flex-end",marginBottom:20}}>
        <div style={{flex:1}}><div style={S.slbl}>Equipo 1</div><select value={e1} onChange={ev=>setE1(ev.target.value)} style={S.sellg}><option value="">Seleccioná</option>{equipos.map(e=><option key={e} value={e}>{e}</option>)}</select></div>
        <span style={{fontWeight:700,fontSize:20,color:"#94a3b8",paddingBottom:8}}>vs</span>
        <div style={{flex:1}}><div style={S.slbl}>Equipo 2</div><select value={e2} onChange={ev=>setE2(ev.target.value)} style={S.sellg}><option value="">Seleccioná</option>{equipos.filter(e=>e!==e1).map(e=><option key={e} value={e}>{e}</option>)}</select></div>
      </div>
      {e1&&e2&&(
        <div>
          <div style={S.kpi}>
            {h2hP.length===0?<div style={{color:"#94a3b8",fontSize:13}}>Sin enfrentamientos registrados.</div>:(
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{display:"flex",alignItems:"center",gap:5,minWidth:110}}><Dot eq={e1} size={12}/><span style={{fontWeight:600,fontSize:13}}>{e1}</span><span style={{fontSize:26,fontWeight:800,color:"#0f3460",marginLeft:4}}>{res.g1}</span></div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",height:14,borderRadius:7,overflow:"hidden"}}>
                    <div style={{flex:res.g1||0.01,background:gc(e1)}}/><div style={{flex:res.emp||0.001,background:"#9ca3af"}}/><div style={{flex:res.g2||0.01,background:gc(e2)}}/>
                  </div>
                  <div style={{textAlign:"center",fontSize:11,color:"#94a3b8",marginTop:4}}>{h2hP.length} partidos · dif. media {res.avg} pts</div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:5,minWidth:110,justifyContent:"flex-end"}}><span style={{fontSize:26,fontWeight:800,color:"#0f3460",marginRight:4}}>{res.g2}</span><span style={{fontWeight:600,fontSize:13}}>{e2}</span><Dot eq={e2} size={12}/></div>
              </div>
            )}
          </div>
          <div style={{marginTop:10,display:"flex",flexDirection:"column",gap:5}}>
            {h2hP.map(p=>{
              const gE1=p.local===e1?p.pL>p.pV:p.pV>p.pL;
              return (
                <div key={p.id} style={Object.assign({},S.card,{gap:8})}>
                  <span style={{fontSize:11,color:"#94a3b8",minWidth:55}}>{p.t} F{p.f}</span>
                  <span style={{flex:1,fontSize:12}}>{p.local}{p.bL&&<BB/>} <strong>{p.pL}</strong> — <strong>{p.pV}</strong> {p.visitante}{p.bV&&<BB/>}</span>
                  <span style={{background:gE1?"#dcfce7":"#fee2e2",color:gE1?"#166534":"#991b1b",borderRadius:4,padding:"2px 7px",fontSize:11,fontWeight:600}}>{gE1?"Ganó "+e1:"Ganó "+e2}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function TabPredictor({arr,equipos,elos,homeStats}) {
  const [e1,setE1]=useState(""); const [e2,setE2]=useState("");
  const [lluvia, setLluvia] = useState(false);
  const proximaFecha = useMemo(()=>{
    // Próxima fecha = última fecha jugada del torneo actual (2026) + 1
    const fechas2026 = arr.filter(p=>p.t===2026).map(p=>p.f);
    const ultimaJugada = fechas2026.length ? Math.max(...fechas2026) : 0;
    return ultimaJugada + 1;
  }, [arr]);
  const hayFormaciones = FORMACIONES[proximaFecha] !== undefined;
  const pred=useMemo(()=>calcPred(e1,e2,arr,elos,homeStats,hayFormaciones?proximaFecha:null,lluvia),[e1,e2,arr,elos,homeStats,proximaFecha,hayFormaciones,lluvia]);
  const rotL=useMemo(()=>hayFormaciones?calcRotacion(e1,proximaFecha):null,[e1,proximaFecha,hayFormaciones]);
  const rotV=useMemo(()=>hayFormaciones?calcRotacion(e2,proximaFecha):null,[e2,proximaFecha,hayFormaciones]);
  return (
    <div>
      {/* Toggle lluvia */}
      <div style={{marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
        <button onClick={()=>setLluvia(!lluvia)}
          style={{display:"flex",alignItems:"center",gap:8,padding:"8px 18px",borderRadius:8,
            border:"2px solid "+(lluvia?"#0284c7":"#e2e8f0"),
            background:lluvia?"#e0f2fe":"#fff",
            cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,
            color:lluvia?"#0284c7":"#94a3b8",transition:"all 0.15s"}}>
          🌧️ Día lluvioso
          <span style={{width:32,height:18,borderRadius:9,background:lluvia?"#0284c7":"#e2e8f0",
            display:"inline-flex",alignItems:"center",padding:"0 3px",transition:"all 0.15s"}}>
            <span style={{width:12,height:12,borderRadius:"50%",background:"#fff",
              transform:lluvia?"translateX(14px)":"translateX(0)",transition:"all 0.15s",display:"block"}}/>
          </span>
        </button>
        {lluvia&&<span style={{fontSize:12,color:"#0284c7"}}>Partidos más cerrados — probabilidades acercadas al 50%</span>}
      </div>
      <div style={{display:"flex",gap:12,alignItems:"flex-end",marginBottom:16}}>
        <div style={{flex:1}}><div style={S.slbl}>Local</div><select value={e1} onChange={ev=>setE1(ev.target.value)} style={S.sellg}><option value="">Equipo local</option>{equipos.map(e=><option key={e} value={e}>{e}</option>)}</select></div>
        <span style={{fontWeight:700,fontSize:20,color:"#94a3b8",paddingBottom:8}}>vs</span>
        <div style={{flex:1}}><div style={S.slbl}>Visitante</div><select value={e2} onChange={ev=>setE2(ev.target.value)} style={S.sellg}><option value="">Equipo visitante</option>{equipos.filter(e=>e!==e1).map(e=><option key={e} value={e}>{e}</option>)}</select></div>
      </div>

      {pred&&(
        <div>
          {/* Etapa del torneo */}
          <div style={{display:"flex",gap:8,marginBottom:12,flexWrap:"wrap"}}>
            <span style={{fontSize:12,padding:"4px 10px",borderRadius:20,fontWeight:600,
              background:pred.stage==="Primera rueda"?"#fef3c7":pred.stage==="Segunda rueda"?"#ffedd5":pred.stage==="Tercera rueda"?"#dbeafe":"#dcfce7",
              color:pred.stage==="Primera rueda"?"#92400e":pred.stage==="Segunda rueda"?"#9a3412":pred.stage==="Tercera rueda"?"#1e40af":"#166534"}}>
              {pred.stage} · F{proximaFecha}
            </span>
            {!hayFormaciones&&(
              <span style={{fontSize:11,padding:"4px 10px",borderRadius:20,background:"#fef9c3",color:"#854d0e",fontWeight:600}}>
                ⏳ Esperando formaciones F{proximaFecha}
              </span>
            )}
            {hayFormaciones&&(
              <span style={{fontSize:11,padding:"4px 10px",borderRadius:20,background:"#dcfce7",color:"#166534",fontWeight:600}}>
                ✓ Formaciones F{proximaFecha} cargadas
              </span>
            )}
            {pred.sraActive&&<span style={{fontSize:12,padding:"4px 10px",borderRadius:20,background:"#fee2e2",color:"#991b1b",fontWeight:600}}>⚡ SRA activo</span>}
          </div>

          {/* Probabilidades */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12}}>
            {[{eq:e1,prob:pred.probL,elo:pred.eL,f:pred.f1,w:pred.w1,win:pred.probL>=pred.probV,bp:pred.bPctL,mom:pred.mPctL},
              {eq:e2,prob:pred.probV,elo:pred.eV,f:pred.f2,w:pred.w2,win:pred.probV>pred.probL,bp:pred.bPctV,mom:pred.mPctV}].map(it=>(
              <div key={it.eq} style={Object.assign({},S.kpi,{border:"2px solid "+(it.win?"#0f3460":"#e2e8f0")})}>
                <div style={{display:"flex",alignItems:"center",gap:5,marginBottom:4}}>
                  <Dot eq={it.eq} size={12}/>
                  <span style={{fontSize:12,color:"#64748b"}}>Gana {it.eq}</span>
                  {ASCENDED_2026.includes(it.eq)&&<span style={{fontSize:9,background:"#fef3c7",color:"#92400e",padding:"1px 4px",borderRadius:3}}>ASC</span>}
                  {pred.sraActive&&SRA_HEAVY.includes(it.eq)&&<span style={{fontSize:9,background:"#fee2e2",color:"#991b1b",padding:"1px 4px",borderRadius:3}}>SRA</span>}
                </div>
                <div style={{fontSize:38,fontWeight:800,color:it.win?"#0f3460":"#94a3b8",lineHeight:1,marginBottom:8}}>{it.prob}%</div>
                <Bar pct={it.prob} color={it.win?gc(it.eq):"#cbd5e1"}/>
                <div style={{display:"flex",gap:12,marginTop:6,fontSize:11,color:"#94a3b8"}}>
                  <span>ELO: {Math.round(it.elo)}</span>
                  <span>Momentum: {it.mom}%</span>
                  <span>Bonus: {it.bp}%</span>
                </div>
                <div style={{display:"flex",gap:3,marginTop:8}}>
                  {it.f.map((r,i)=><Bdg key={i} r={r}/>)}
                  {Array.from({length:5-it.f.length}).map((_,i)=><span key={i} style={{width:22,height:22,borderRadius:"50%",background:"#e5e7eb",display:"inline-block"}}/>)}
                </div>
                <div style={{fontSize:11,color:"#94a3b8",marginTop:3}}>Forma: {it.w}/5 victorias recientes</div>
              </div>
            ))}
          </div>

          {/* Factores de ajuste */}
          {(pred.sraNote.length>0||pred.ascNote.length>0||pred.momAdj!==0)&&(
            <div style={Object.assign({},S.kpi,{marginBottom:10,background:"#fafafa"})}>
              <div style={S.kpiL}>Factores de ajuste aplicados</div>
              {pred.momAdj!==0&&<div style={{fontSize:12,marginTop:4}}>📈 Momentum: {pred.momAdj>0?"+":""}{pred.momAdj}% a favor de {pred.momAdj>0?e1:e2}</div>}
              {pred.stage==="Primera rueda"&&<div style={{fontSize:12,marginTop:4}}>🎲 Primera rueda (F1-6): alta variabilidad, SRA activo</div>}
              {pred.stage==="Segunda rueda"&&<div style={{fontSize:12,marginTop:4}}>📊 Segunda rueda (F7-12): patrones establecidos, SRA activo</div>}
              {pred.stage==="Tercera rueda"&&<div style={{fontSize:12,marginTop:4}}>💪 Tercera rueda (F13-19): planteles completos, mayor previsibilidad</div>}
              {pred.stage==="Definición"&&<div style={{fontSize:12,marginTop:4}}>🎯 Definición (F20-26): presión máxima, diferencias amplificadas</div>}
              {pred.sraNote.map((n,i)=><div key={i} style={{fontSize:12,marginTop:4}}>⚡ {n}</div>)}
              {pred.ascNote.map((n,i)=><div key={i} style={{fontSize:12,marginTop:4}}>📉 {n}</div>)}
              {pred.homeNote&&<div style={{fontSize:12,marginTop:4}}>🏟️ {pred.homeNote}</div>}
              {lluvia&&<div style={{fontSize:12,marginTop:4,color:"#0284c7",fontWeight:600}}>🌧️ Día lluvioso activado — probabilidades acercadas al 50%</div>}
              {pred.iffNote&&pred.iffNote.map((n,i)=>(
                <div key={i} style={{fontSize:12,marginTop:4,color:"#dc2626",fontWeight:600}}>⚡ {n}</div>
              ))}
              {rotL&&rotL.cambios>=3&&(
                <div style={{fontSize:12,marginTop:4,color:rotL.color,fontWeight:600}}>
                  🔄 {e1} presenta <strong>{rotL.cambios} cambios</strong> respecto a F{rotL.fechaAnterior}
                  {rotL.nivel==="severo"?" — inestabilidad severa":rotL.nivel==="alto"?" — rotación alta":rotL.nivel==="moderado"?" — rotación moderada":""}
                </div>
              )}
              {rotV&&rotV.cambios>=3&&(
                <div style={{fontSize:12,marginTop:4,color:rotV.color,fontWeight:600}}>
                  🔄 {e2} presenta <strong>{rotV.cambios} cambios</strong> respecto a F{rotV.fechaAnterior}
                  {rotV.nivel==="severo"?" — inestabilidad severa":rotV.nivel==="alto"?" — rotación alta":rotV.nivel==="moderado"?" — rotación moderada":""}
                </div>
              )}
            </div>
          )}

          {/* H2H */}
          <div style={S.kpi}>
            <div style={S.kpiL}>Head-to-head histórico ({pred.h2hTotal} partidos)</div>
            {pred.h2hTotal===0
              ?<div style={{color:"#94a3b8",fontSize:13,marginTop:6}}>Sin enfrentamientos registrados.</div>
              :<div style={{display:"flex",gap:20,marginTop:8,fontSize:14}}>
                <span><strong>{e1}</strong>: {pred.g1H} victorias</span>
                <span style={{color:"#94a3b8"}}>{pred.h2hTotal} partidos</span>
                <span><strong>{e2}</strong>: {pred.g2H} victorias</span>
              </div>
            }
          </div>
        </div>
      )}

      <div style={S.secTitle}>Ranking ELO (todas las temporadas)</div>
      {Object.entries(elos).sort((a,b)=>b[1]-a[1]).map(([eq,elo],i)=>(
        <div key={eq} style={{display:"flex",alignItems:"center",gap:10,padding:"7px 0",borderBottom:"1px solid #f1f5f9"}}>
          <span style={{width:22,fontSize:12,color:"#94a3b8",fontWeight:700}}>{i+1}</span>
          <Dot eq={eq}/>
          <span style={{flex:1,fontSize:13}}>{eq}</span>
          {ASCENDED_2026.includes(eq)&&<span style={{fontSize:9,background:"#fef3c7",color:"#92400e",padding:"1px 4px",borderRadius:3}}>ASC</span>}
          <div style={{width:120}}><Bar pct={Math.min(Math.round((elo-1400)/3),100)} color={gc(eq)}/></div>
          <span style={{minWidth:44,textAlign:"right",fontWeight:700,fontSize:14,color:"#0f3460"}}>{Math.round(elo)}</span>
        </div>
      ))}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────


// ── FIXTURE 2026 COMPLETO ─────────────────────────────────────
const FIXTURE_2026 = {
  4:  {d:"2026-04-11", partidos:[
    {local:"Newman",visitante:"Los Matreros"},
    {local:"SIC",visitante:"Alumni"},
    {local:"Belgrano Ath.",visitante:"Champagnat"},
    {local:"Buenos Aires",visitante:"Hindú"},
    {local:"CUBA",visitante:"La Plata"},
    {local:"CASI",visitante:"Regatas"},
    {local:"Los Tilos",visitante:"Atl. del Rosario"},
  ]},
  5:  {d:"2026-04-18", partidos:[
    {local:"Los Matreros",visitante:"Los Tilos"},
    {local:"Atl. del Rosario",visitante:"CASI"},
    {local:"Regatas",visitante:"CUBA"},
    {local:"La Plata",visitante:"Buenos Aires"},
    {local:"Hindú",visitante:"Belgrano Ath."},
    {local:"Champagnat",visitante:"SIC"},
    {local:"Alumni",visitante:"Newman"},
  ]},
  6:  {d:"2026-04-25", partidos:[
    {local:"Alumni",visitante:"Los Matreros"},
    {local:"Newman",visitante:"Champagnat"},
    {local:"SIC",visitante:"Hindú"},
    {local:"Belgrano Ath.",visitante:"La Plata"},
    {local:"Buenos Aires",visitante:"Regatas"},
    {local:"CUBA",visitante:"Atl. del Rosario"},
    {local:"CASI",visitante:"Los Tilos"},
  ]},
  7:  {d:"2026-05-09", partidos:[
    {local:"Los Matreros",visitante:"CASI"},
    {local:"Los Tilos",visitante:"CUBA"},
    {local:"Atl. del Rosario",visitante:"Buenos Aires"},
    {local:"Regatas",visitante:"Belgrano Ath."},
    {local:"La Plata",visitante:"SIC"},
    {local:"Hindú",visitante:"Newman"},
    {local:"Champagnat",visitante:"Alumni"},
  ]},
  8:  {d:"2026-05-16", partidos:[
    {local:"Champagnat",visitante:"Los Matreros"},
    {local:"Alumni",visitante:"Hindú"},
    {local:"Newman",visitante:"La Plata"},
    {local:"SIC",visitante:"Regatas"},
    {local:"Belgrano Ath.",visitante:"Atl. del Rosario"},
    {local:"Buenos Aires",visitante:"Los Tilos"},
    {local:"CUBA",visitante:"CASI"},
  ]},
  9:  {d:"2026-05-23", partidos:[
    {local:"Los Matreros",visitante:"CUBA"},
    {local:"CASI",visitante:"Buenos Aires"},
    {local:"Los Tilos",visitante:"Belgrano Ath."},
    {local:"Atl. del Rosario",visitante:"SIC"},
    {local:"Regatas",visitante:"Newman"},
    {local:"La Plata",visitante:"Alumni"},
    {local:"Hindú",visitante:"Champagnat"},
  ]},
  10: {d:"2026-05-30", partidos:[
    {local:"Hindú",visitante:"Los Matreros"},
    {local:"Champagnat",visitante:"La Plata"},
    {local:"Alumni",visitante:"Regatas"},
    {local:"Newman",visitante:"Atl. del Rosario"},
    {local:"SIC",visitante:"Los Tilos"},
    {local:"Belgrano Ath.",visitante:"CASI"},
    {local:"Buenos Aires",visitante:"CUBA"},
  ]},
  11: {d:"2026-06-06", partidos:[
    {local:"Los Matreros",visitante:"Buenos Aires"},
    {local:"CUBA",visitante:"Belgrano Ath."},
    {local:"CASI",visitante:"SIC"},
    {local:"Los Tilos",visitante:"Newman"},
    {local:"Atl. del Rosario",visitante:"Alumni"},
    {local:"Regatas",visitante:"Champagnat"},
    {local:"La Plata",visitante:"Hindú"},
  ]},
  12: {d:"2026-06-20", partidos:[
    {local:"La Plata",visitante:"Los Matreros"},
    {local:"Hindú",visitante:"Regatas"},
    {local:"Champagnat",visitante:"Atl. del Rosario"},
    {local:"Alumni",visitante:"Los Tilos"},
    {local:"Newman",visitante:"CASI"},
    {local:"SIC",visitante:"CUBA"},
    {local:"Belgrano Ath.",visitante:"Buenos Aires"},
  ]},
  13: {d:"2026-06-27", partidos:[
    {local:"Los Matreros",visitante:"Belgrano Ath."},
    {local:"Buenos Aires",visitante:"SIC"},
    {local:"CUBA",visitante:"Newman"},
    {local:"CASI",visitante:"Alumni"},
    {local:"Los Tilos",visitante:"Champagnat"},
    {local:"Atl. del Rosario",visitante:"Hindú"},
    {local:"Regatas",visitante:"La Plata"},
  ]},
  14: {d:"2026-07-04", partidos:[
    {local:"Regatas",visitante:"Los Matreros"},
    {local:"Atl. del Rosario",visitante:"La Plata"},
    {local:"Los Tilos",visitante:"Hindú"},
    {local:"CASI",visitante:"Champagnat"},
    {local:"CUBA",visitante:"Alumni"},
    {local:"Buenos Aires",visitante:"Newman"},
    {local:"Belgrano Ath.",visitante:"SIC"},
  ]},
  15: {d:"2026-07-11", partidos:[
    {local:"Los Matreros",visitante:"SIC"},
    {local:"Newman",visitante:"Belgrano Ath."},
    {local:"Alumni",visitante:"Buenos Aires"},
    {local:"Champagnat",visitante:"CUBA"},
    {local:"Hindú",visitante:"CASI"},
    {local:"La Plata",visitante:"Los Tilos"},
    {local:"Regatas",visitante:"Atl. del Rosario"},
  ]},
  16: {d:"2026-07-18", partidos:[
    {local:"Atl. del Rosario",visitante:"Los Matreros"},
    {local:"Los Tilos",visitante:"Regatas"},
    {local:"CASI",visitante:"La Plata"},
    {local:"CUBA",visitante:"Hindú"},
    {local:"Buenos Aires",visitante:"Champagnat"},
    {local:"Belgrano Ath.",visitante:"Alumni"},
    {local:"SIC",visitante:"Newman"},
  ]},
  17: {d:"2026-08-01", partidos:[
    {local:"Los Matreros",visitante:"Newman"},
    {local:"Alumni",visitante:"SIC"},
    {local:"Champagnat",visitante:"Belgrano Ath."},
    {local:"Hindú",visitante:"Buenos Aires"},
    {local:"La Plata",visitante:"CUBA"},
    {local:"Regatas",visitante:"CASI"},
    {local:"Atl. del Rosario",visitante:"Los Tilos"},
  ]},
  18: {d:"2026-08-15", partidos:[
    {local:"Los Tilos",visitante:"Los Matreros"},
    {local:"CASI",visitante:"Atl. del Rosario"},
    {local:"CUBA",visitante:"Regatas"},
    {local:"Buenos Aires",visitante:"La Plata"},
    {local:"Belgrano Ath.",visitante:"Hindú"},
    {local:"SIC",visitante:"Champagnat"},
    {local:"Newman",visitante:"Alumni"},
  ]},
  19: {d:"2026-08-22", partidos:[
    {local:"Los Matreros",visitante:"Alumni"},
    {local:"Champagnat",visitante:"Newman"},
    {local:"Hindú",visitante:"SIC"},
    {local:"La Plata",visitante:"Belgrano Ath."},
    {local:"Regatas",visitante:"Buenos Aires"},
    {local:"Atl. del Rosario",visitante:"CUBA"},
    {local:"Los Tilos",visitante:"CASI"},
  ]},
  20: {d:"2026-08-29", partidos:[
    {local:"CASI",visitante:"Los Matreros"},
    {local:"CUBA",visitante:"Los Tilos"},
    {local:"Buenos Aires",visitante:"Atl. del Rosario"},
    {local:"Belgrano Ath.",visitante:"Regatas"},
    {local:"SIC",visitante:"La Plata"},
    {local:"Newman",visitante:"Hindú"},
    {local:"Alumni",visitante:"Champagnat"},
  ]},
  21: {d:"2026-09-05", partidos:[
    {local:"Los Matreros",visitante:"Champagnat"},
    {local:"Hindú",visitante:"Alumni"},
    {local:"La Plata",visitante:"Newman"},
    {local:"Regatas",visitante:"SIC"},
    {local:"Atl. del Rosario",visitante:"Belgrano Ath."},
    {local:"Los Tilos",visitante:"Buenos Aires"},
    {local:"CASI",visitante:"CUBA"},
  ]},
  22: {d:"2026-09-12", partidos:[
    {local:"CUBA",visitante:"Los Matreros"},
    {local:"Buenos Aires",visitante:"CASI"},
    {local:"Belgrano Ath.",visitante:"Los Tilos"},
    {local:"SIC",visitante:"Atl. del Rosario"},
    {local:"Newman",visitante:"Regatas"},
    {local:"Alumni",visitante:"La Plata"},
    {local:"Champagnat",visitante:"Hindú"},
  ]},
  23: {d:"2026-09-26", partidos:[
    {local:"Los Matreros",visitante:"Hindú"},
    {local:"La Plata",visitante:"Champagnat"},
    {local:"Regatas",visitante:"Alumni"},
    {local:"Atl. del Rosario",visitante:"Newman"},
    {local:"Los Tilos",visitante:"SIC"},
    {local:"CASI",visitante:"Belgrano Ath."},
    {local:"CUBA",visitante:"Buenos Aires"},
  ]},
  24: {d:"2026-10-03", partidos:[
    {local:"Buenos Aires",visitante:"Los Matreros"},
    {local:"Belgrano Ath.",visitante:"CUBA"},
    {local:"SIC",visitante:"CASI"},
    {local:"Newman",visitante:"Los Tilos"},
    {local:"Alumni",visitante:"Atl. del Rosario"},
    {local:"Champagnat",visitante:"Regatas"},
    {local:"Hindú",visitante:"La Plata"},
  ]},
  25: {d:"2026-10-10", partidos:[
    {local:"Los Matreros",visitante:"La Plata"},
    {local:"Regatas",visitante:"Hindú"},
    {local:"Atl. del Rosario",visitante:"Champagnat"},
    {local:"Los Tilos",visitante:"Alumni"},
    {local:"CASI",visitante:"Newman"},
    {local:"CUBA",visitante:"SIC"},
    {local:"Buenos Aires",visitante:"Belgrano Ath."},
  ]},
  26: {d:"2026-10-17", partidos:[
    {local:"Belgrano Ath.",visitante:"Los Matreros"},
    {local:"SIC",visitante:"Buenos Aires"},
    {local:"Newman",visitante:"CUBA"},
    {local:"Alumni",visitante:"CASI"},
    {local:"Champagnat",visitante:"Los Tilos"},
    {local:"Hindú",visitante:"Atl. del Rosario"},
    {local:"La Plata",visitante:"Regatas"},
  ]},
};


// ── CUOTAS PRECARGADAS ───────────────────────────────────────
const DEFAULT_CUOTAS = {
  4: {
    "26_f4_0":{local:"Newman",visitante:"Los Matreros",stakeL:"1.2",stakeV:"4.8",stakeE:"26",b365L:"1.22",b365V:"4.33",b365E:"26",locked:true,resultado:"L"},
    "26_f4_1":{local:"SIC",visitante:"Alumni",stakeL:"1.19",stakeV:"4.9",stakeE:"27",b365L:"1.22",b365V:"4.33",b365E:"26",locked:true,resultado:"L"},
    "26_f4_2":{local:"Belgrano Ath.",visitante:"Champagnat",stakeL:"1.3",stakeV:"3.75",stakeE:"24",b365L:"1.3",b365V:"3.6",b365E:"26",locked:true,resultado:"V"},
    "26_f4_3":{local:"Buenos Aires",visitante:"Hindú",stakeL:"2.75",stakeV:"1.5",stakeE:"21",b365L:"2.6",b365V:"1.53",b365E:"21",locked:true,resultado:"V"},
    "26_f4_4":{local:"CUBA",visitante:"La Plata",stakeL:"1.34",stakeV:"3.45",stakeE:"23",b365L:"1.4",b365V:"3.1",b365E:"21",locked:true,resultado:"V"},
    "26_f4_5":{local:"CASI",visitante:"Regatas",stakeL:"1.2",stakeV:"4.8",stakeE:"26",b365L:"1.22",b365V:"4.33",b365E:"26",locked:true,resultado:"L"},
    "26_f4_6":{local:"Los Tilos",visitante:"Atl. del Rosario",stakeL:"1.43",stakeV:"3",stakeE:"21",b365L:"1.5",b365V:"2.62",b365E:"2",locked:true,resultado:"V"},
  },
  5: {
    "26_f5_0":{local:"Los Matreros",visitante:"Los Tilos",stakeL:"1.52",stakeV:"2.7",stakeE:"20",b365L:"1.5",b365V:"2.62",b365E:"21",locked:true,resultado:"V"},
    "26_f5_1":{local:"Atl. del Rosario",visitante:"CASI",stakeL:"3.65",stakeV:"1.31",stakeE:"24",b365L:"3.6",b365V:"1.3",b365E:"26",locked:true,resultado:"V"},
    "26_f5_2":{local:"Regatas",visitante:"CUBA",stakeL:"1.37",stakeV:"3.3",stakeE:"23",b365L:"1.36",b365V:"3.2",b365E:"23",locked:true,resultado:"L"},
    "26_f5_3":{local:"La Plata",visitante:"Buenos Aires",stakeL:"1.37",stakeV:"3.3",stakeE:"23",b365L:"1.36",b365V:"3.2",b365E:"23",locked:true,resultado:"V"},
    "26_f5_4":{local:"Hindú",visitante:"Belgrano Ath.",stakeL:"1.25",stakeV:"4.2",stakeE:"23",b365L:"1.25",b365V:"4",b365E:"26",locked:true,resultado:"L"},
    "26_f5_5":{local:"Champagnat",visitante:"SIC",stakeL:"3.65",stakeV:"1.31",stakeE:"24",b365L:"3.6",b365V:"1.3",b365E:"26",locked:true,resultado:"V"},
    "26_f5_6":{local:"Alumni",visitante:"Newman",stakeL:"2.34",stakeV:"1.67",stakeE:"19",b365L:"2.3",b365V:"1.66",b365E:"21",locked:true,resultado:"V"},
  },
  6: {
    "26_f6_0":{local:"Alumni",visitante:"Los Matreros",stakeL:"1.36",stakeV:"3.3",stakeE:"23",b365L:"1.36",b365V:"3.2",b365E:"23",locked:true,resultado:"V"},
    "26_f6_1":{local:"Newman",visitante:"Champagnat",stakeL:"1.25",stakeV:"4.1",stakeE:"26",b365L:"1.25",b365V:"4",b365E:"26",locked:true,resultado:"L"},
    "26_f6_2":{local:"SIC",visitante:"Hindú",stakeL:"1.44",stakeV:"2.95",stakeE:"21",b365L:"1.44",b365V:"2.87",b365E:"21",locked:true,resultado:"V"},
    "26_f6_3":{local:"Belgrano Ath.",visitante:"La Plata",stakeL:"1.47",stakeV:"2.85",stakeE:"21",b365L:"1.5",b365V:"2.7",b365E:"21",locked:true,resultado:"L"},
    "26_f6_4":{local:"Buenos Aires",visitante:"Regatas",stakeL:"2.03",stakeV:"1.85",stakeE:"22",b365L:"2.05",b365V:"1.83",b365E:"19",locked:true,resultado:"V"},
    "26_f6_5":{local:"CUBA",visitante:"Atl. del Rosario",stakeL:"1.8",stakeV:"2.12",stakeE:"19",b365L:"1.8",b365V:"2.1",b365E:"19",locked:true,resultado:"L"},
    "26_f6_6":{local:"CASI",visitante:"Los Tilos",stakeL:"1.26",stakeV:"4.1",stakeE:"26",b365L:"1.25",b365V:"4",b365E:"26",locked:true,resultado:"L"},
  },
  7: {
    "26_f7_0":{local:"Los Matreros",visitante:"CASI",stakeL:"3.65",stakeV:"1.31",stakeE:"23",b365L:"3.1",b365V:"1.4",b365E:"23",locked:true,resultado:"V"},
    "26_f7_1":{local:"Los Tilos",visitante:"CUBA",stakeL:"1.43",stakeV:"2.95",stakeE:"21",b365L:"1.5",b365V:"2.62",b365E:"21",locked:true,resultado:"V"},
    "26_f7_2":{local:"Atl. del Rosario",visitante:"Buenos Aires",stakeL:"1.42",stakeV:"3.05",stakeE:"22",b365L:"1.44",b365V:"2.87",b365E:"21",locked:true,resultado:"L"},
    "26_f7_3":{local:"Regatas",visitante:"Belgrano Ath.",stakeL:"1.35",stakeV:"3.4",stakeE:"22",b365L:"1.36",b365V:"3.2",b365E:"23",locked:true,resultado:"V"},
    "26_f7_4":{local:"La Plata",visitante:"SIC",stakeL:"5.8",stakeV:"1.14",stakeE:"29",b365L:"5",b365V:"1.16",b365E:"34",locked:true,resultado:"V"},
    "26_f7_5":{local:"Hindú",visitante:"Newman",stakeL:"1.42",stakeV:"3.05",stakeE:"22",b365L:"1.36",b365V:"3.2",b365E:"23",locked:true,resultado:"V"},
    "26_f7_6":{local:"Champagnat",visitante:"Alumni",stakeL:"1.98",stakeV:"1.88",stakeE:"24",b365L:"1.61",b365V:"2.37",b365E:"21",locked:true,resultado:"V"},
  }
};


const DEFAULT_TRACKER = [
  {id:"26_f5_0",fecha:5,local:"Los Matreros",visitante:"Los Tilos",stakeL:1.52,stakeV:2.7,stakeE:20,b365L:1.5,b365V:2.62,b365E:21,probModelL:56,probModelV:44,probMktL:66,probMktV:37,probMktE:5,overroundStake:8.0,overroundB365:7.1,valueL:-0.15,valueV:0.19,resultado:"V",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_1",fecha:5,local:"Atl. del Rosario",visitante:"CASI",stakeL:3.65,stakeV:1.31,stakeE:24,b365L:3.6,b365V:1.3,b365E:26,probModelL:16,probModelV:84,probMktL:27,probMktV:76,probMktE:4,overroundStake:7.4,overroundB365:8.4,valueL:null,valueV:0.10,resultado:"V",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_2",fecha:5,local:"Regatas",visitante:"CUBA",stakeL:1.37,stakeV:3.3,stakeE:23,b365L:1.36,b365V:3.2,b365E:23,probModelL:60,probModelV:40,probMktL:73,probMktV:30,probMktE:4,overroundStake:7.3,overroundB365:9.1,valueL:-0.18,valueV:0.32,resultado:"L",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_3",fecha:5,local:"La Plata",visitante:"Buenos Aires",stakeL:1.37,stakeV:3.3,stakeE:23,b365L:1.36,b365V:3.2,b365E:23,probModelL:48,probModelV:52,probMktL:73,probMktV:30,probMktE:4,overroundStake:7.3,overroundB365:9.1,valueL:-0.34,valueV:0.72,resultado:"V",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_4",fecha:5,local:"Hindú",visitante:"Belgrano Ath.",stakeL:1.25,stakeV:4.2,stakeE:23,b365L:1.25,b365V:4,b365E:26,probModelL:48,probModelV:52,probMktL:80,probMktV:24,probMktE:4,overroundStake:7.6,overroundB365:8.8,valueL:-0.40,valueV:1.18,resultado:"L",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_5",fecha:5,local:"Champagnat",visitante:"SIC",stakeL:3.65,stakeV:1.31,stakeE:24,b365L:3.6,b365V:1.3,b365E:26,probModelL:12,probModelV:88,probMktL:27,probMktV:76,probMktE:4,overroundStake:7.4,overroundB365:8.4,valueL:null,valueV:0.15,resultado:"V",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f5_6",fecha:5,local:"Alumni",visitante:"Newman",stakeL:2.34,stakeV:1.67,stakeE:19,b365L:2.3,b365V:1.66,b365E:21,probModelL:25,probModelV:75,probMktL:43,probMktV:60,probMktE:5,overroundStake:7.4,overroundB365:8.4,valueL:null,valueV:0.25,resultado:"V",lockedAt:"2026-04-18T10:00:00.000Z"},
  {id:"26_f6_0",fecha:6,local:"Alumni",visitante:"Los Matreros",stakeL:1.36,stakeV:3.3,stakeE:23,b365L:1.36,b365V:3.2,b365E:23,probModelL:58,probModelV:42,probMktL:74,probMktV:30,probMktE:4,overroundStake:7.2,overroundB365:9.2,valueL:-0.21,valueV:0.39,resultado:"V",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_1",fecha:6,local:"Newman",visitante:"Champagnat",stakeL:1.25,stakeV:4.1,stakeE:26,b365L:1.25,b365V:4,b365E:26,probModelL:89,probModelV:11,probMktL:80,probMktV:24,probMktE:4,overroundStake:7.3,overroundB365:9.2,valueL:0.11,valueV:null,resultado:"L",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_2",fecha:6,local:"SIC",visitante:"Hindú",stakeL:1.44,stakeV:2.95,stakeE:21,b365L:1.44,b365V:2.87,b365E:21,probModelL:71,probModelV:29,probMktL:69,probMktV:34,probMktE:5,overroundStake:7.7,overroundB365:9.2,valueL:0.02,valueV:null,resultado:"V",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_3",fecha:6,local:"Belgrano Ath.",visitante:"La Plata",stakeL:1.47,stakeV:2.85,stakeE:21,b365L:1.5,b365V:2.7,b365E:21,probModelL:79,probModelV:21,probMktL:68,probMktV:35,probMktE:5,overroundStake:7.5,overroundB365:9.0,valueL:0.16,valueV:null,resultado:"L",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_4",fecha:6,local:"Buenos Aires",visitante:"Regatas",stakeL:2.03,stakeV:1.85,stakeE:22,b365L:2.05,b365V:1.83,b365E:19,probModelL:34,probModelV:66,probMktL:49,probMktV:54,probMktE:5,overroundStake:7.7,overroundB365:9.2,valueL:null,valueV:0.22,resultado:"V",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_5",fecha:6,local:"CUBA",visitante:"Atl. del Rosario",stakeL:1.8,stakeV:2.12,stakeE:19,b365L:1.8,b365V:2.1,b365E:19,probModelL:54,probModelV:46,probMktL:56,probMktV:47,probMktE:5,overroundStake:7.9,overroundB365:9.2,valueL:-0.03,valueV:null,resultado:"L",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f6_6",fecha:6,local:"CASI",visitante:"Los Tilos",stakeL:1.26,stakeV:4.1,stakeE:26,b365L:1.25,b365V:4,b365E:26,probModelL:76,probModelV:24,probMktL:79,probMktV:24,probMktE:4,overroundStake:7.2,overroundB365:9.2,valueL:null,valueV:null,resultado:"L",lockedAt:"2026-04-25T10:00:00.000Z"},
  {id:"26_f7_0",fecha:7,local:"Los Matreros",visitante:"CASI",stakeL:3.65,stakeV:1.31,stakeE:23,b365L:3.1,b365V:1.4,b365E:23,probModelL:26,probModelV:74,probMktL:32,probMktV:71,probMktE:4,overroundStake:null,overroundB365:7.7,valueL:null,valueV:0.04,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_1",fecha:7,local:"Los Tilos",visitante:"CUBA",stakeL:1.43,stakeV:2.95,stakeE:21,b365L:1.5,b365V:2.62,b365E:21,probModelL:58,probModelV:42,probMktL:67,probMktV:38,probMktE:5,overroundStake:null,overroundB365:9.3,valueL:null,valueV:null,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_2",fecha:7,local:"Atl. del Rosario",visitante:"Buenos Aires",stakeL:1.42,stakeV:3.05,stakeE:22,b365L:1.44,b365V:2.87,b365E:21,probModelL:48,probModelV:52,probMktL:69,probMktV:35,probMktE:5,overroundStake:null,overroundB365:8.7,valueL:null,valueV:0.49,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_3",fecha:7,local:"Regatas",visitante:"Belgrano Ath.",stakeL:1.35,stakeV:3.4,stakeE:22,b365L:1.36,b365V:3.2,b365E:23,probModelL:41,probModelV:59,probMktL:74,probMktV:31,probMktE:4,overroundStake:null,overroundB365:9.2,valueL:null,valueV:0.89,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_4",fecha:7,local:"La Plata",visitante:"SIC",stakeL:null,stakeV:null,stakeE:null,b365L:5,b365V:1.16,b365E:34,probModelL:10,probModelV:90,probMktL:20,probMktV:86,probMktE:3,overroundStake:null,overroundB365:8.9,valueL:null,valueV:0.04,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_5",fecha:7,local:"Hindú",visitante:"Newman",stakeL:1.42,stakeV:3.05,stakeE:22,b365L:1.36,b365V:3.2,b365E:23,probModelL:30,probModelV:70,probMktL:74,probMktV:31,probMktE:4,overroundStake:null,overroundB365:9.2,valueL:null,valueV:1.24,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f7_6",fecha:7,local:"Champagnat",visitante:"Alumni",stakeL:1.98,stakeV:1.88,stakeE:24,b365L:1.61,b365V:2.37,b365E:21,probModelL:31,probModelV:69,probMktL:62,probMktV:42,probMktE:5,overroundStake:null,overroundB365:8.8,valueL:null,valueV:0.64,resultado:null,lockedAt:"2026-05-09T10:00:00.000Z"},
  {id:"26_f4_0",fecha:4,local:"Newman",visitante:"Los Matreros",stakeL:1.2,stakeV:4.8,stakeE:26,b365L:1.22,b365V:4.33,b365E:26,probModelL:79,probModelV:21,probMktL:83,probMktV:21,probMktE:4,overroundStake:6.5,overroundB365:6.1,valueL:-0.05,valueV:null,resultado:"L",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_1",fecha:4,local:"SIC",visitante:"Alumni",stakeL:1.19,stakeV:4.9,stakeE:27,b365L:1.22,b365V:4.33,b365E:26,probModelL:73,probModelV:27,probMktL:84,probMktV:20,probMktE:4,overroundStake:6.9,overroundB365:6.1,valueL:-0.13,valueV:0.32,resultado:"L",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_2",fecha:4,local:"Belgrano Ath.",visitante:"Champagnat",stakeL:1.3,stakeV:3.75,stakeE:24,b365L:1.3,b365V:3.6,b365E:26,probModelL:80,probModelV:20,probMktL:77,probMktV:27,probMktE:4,overroundStake:6.9,overroundB365:6.5,valueL:0.04,valueV:null,resultado:"V",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_3",fecha:4,local:"Buenos Aires",visitante:"Hindú",stakeL:2.75,stakeV:1.5,stakeE:21,b365L:2.6,b365V:1.53,b365E:21,probModelL:26,probModelV:74,probMktL:36,probMktV:67,probMktE:5,overroundStake:6.7,overroundB365:6.5,valueL:null,valueV:0.11,resultado:"V",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_4",fecha:4,local:"CUBA",visitante:"La Plata",stakeL:1.34,stakeV:3.45,stakeE:23,b365L:1.4,b365V:3.1,b365E:21,probModelL:64,probModelV:36,probMktL:75,probMktV:29,probMktE:4,overroundStake:7.3,overroundB365:6.7,valueL:-0.14,valueV:0.24,resultado:"V",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_5",fecha:4,local:"CASI",visitante:"Regatas",stakeL:1.2,stakeV:4.8,stakeE:26,b365L:1.22,b365V:4.33,b365E:26,probModelL:73,probModelV:27,probMktL:83,probMktV:21,probMktE:4,overroundStake:6.5,overroundB365:6.1,valueL:-0.12,valueV:0.30,resultado:"L",lockedAt:"2026-04-11T10:12:43.000Z"},
  {id:"26_f4_6",fecha:4,local:"Los Tilos",visitante:"Atl. del Rosario",stakeL:1.43,stakeV:3,stakeE:21,b365L:1.5,b365V:2.62,b365E:2,probModelL:67,probModelV:33,probMktL:70,probMktV:33,probMktE:5,overroundStake:7.5,overroundB365:88.5,valueL:-0.04,valueV:null,resultado:"V",lockedAt:"2026-04-11T10:12:43.000Z"},
];


// ── FORMACIONES 2026 ─────────────────────────────────────────
const FORMACIONES = {
  1: {
    fecha: 1, d: "2026-03-14",
    equipos: {
      "Newman":         { j:["Miguel Prince","Fermín Perkins","Bautista Bosch","Pablo Cardinal","Alejandro Urtubey","Mateo Montoya","Joaquín De la Vega","Rodrigo Díaz de Vivar","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortiz Basualdo","Benjamín Lanfranco","Simón Prince","Cruz Ulloa","Juan Bautista Daireaux"], c:null },
      "SIC":            { j:["Francisco Calandra","Lucas Rocha","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Tomás Meyrelles","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Hindú":          { j:["Franco Diviesti","Agustin Capurro","Nicolas Leiva","Tomas Scallan","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolas Amaya","Felipe Ezcurra","Fermin Ormaechea","Facundo Graglia","Ramon Fernández Miranda","Lisandro Rodríguez","Tomas Amher","Juan Aranoa"], c:null },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Ignacio Torrado","Leo Mazzini","Eugenio Sartori","Benito Paolucci","Benjamín Rocca Rivarola","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Jerónimo Solveyra","Benjamín Belaga","Jerónimo Tumbarello","Juan Akemeier"], c:null },
      "Alumni":         { j:["Juan Cruz Bottoni","Máximo Lamelas","Francisco Bottoni","Manuel Mora","Santiago Alduncin","Ignacio Cubilla","Juan Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Aquiles Vieyra","Filippo Testoni","Franco Sábato","Ramón Fuentes","Matías Del Franco"], c:null },
      "Belgrano Ath.":  { j:["Francisco Ferronato","Lisandro García Dragui","Franco Morales","Luciano Tecca","Mikael Bloom Quesada","Augusto Vaccarino","Julian Rebusone","Franco Vega","Theo Blacksley","Juan Apricio","Tobias Bernabé","Martin Arana","Tomas Etchepare","Pedro Arana","Bautista Leiro"], c:null },
      "CUBA":           { j:["Francisco Garoby","Tomás Anderlic","Esteban Iribarne","Marcos Loza","Santiago Uriarte","Lucas Campion","Segundo Pisani","Benito Ortíz de Rozas","Ignacio Albani","Valentín Mastroizzi","Pedro Castro Nevares","Rafael Benedit","Felipe de la Vega","Ramiro Cardini","Tomás Passaro"], c:"Segundo Pisani" },
      "Regatas":        { j:["Tomás Barbaccia","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Agustín García Campos","Lucas Gobet","Felipe Camerlinckx","Marcos Joseph","Justo Camerlinkckx","Enrique Camerlinckx","Mateo Camerlinckx","Tobías Klapenbach","Francisco Pisani","Felipe Rugolo"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Joaquin Nuñez","Martin Patat","Bautista Ozog","Ivan Kucic","Segundo Pineda","Nicolas Chiappani","Tomás Bernasconi","Manuel De la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Francisco Cejas","Facundo Panigatti","Federico Sica Manuele"], c:null },
      "Los Tilos":      { j:["Joaquin Briozzo","Hipolito San Sebastián","Maximo Laurin","Martin Leiva","Juan Blaiotta Lago","Luciano Torboli","Eliseo Chiavassa","Felipe Bares","Pedro Rodríguez Alcobendas","Joaquin Tuculet","Gastón Martinez","Tomás Fernandez Armendariz","Tiago Bassagaistegui","Ignacio Guichon","Bautista Santamarina"], c:null },
      "Champagnat":     { j:["Alberto Natan Adissi","Fernando Rodríguez Pascarella","Marcos Magaro","Santiago Escuti","Tobías Rivas Orozco","Matías Jesus Alonso Boto","Francisco Migi Castelli Azpiroz","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
      "Buenos Aires":   { j:["Tomás Gallo","Tomás Ruiz","Renzo Zanella","Francisco Syriani","Bautista Saint Bonnet","Matías Espina","Pablo Bourdal","Tomás Etcheverry","Mateo Freire","Tomás Bunge","Ignacio Bensadon","Agustín Lamensa","Ramiro Costa","Segundo Ortiz","Alejo Novo"], c:"Agustín Lamensa" },
      "Los Matreros":   { j:["Matías Salina","Boris Cec","Juan Pablo Zeiss","Tomas Gahan","Alejo Villafañe","Colin McCormack","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Pablo Garcia Michero"], c:null },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Ignacio Sapino","Francisco Echenique","Lucas Malanos","Felipe Nogués","Manuel Nogués","Nicolás Casals","Tomás Malanos","Ramiro Musio","Juan Cruz Bertero","Martín Elías"], c:null },
    }
  },
  2: {
    fecha: 2, d: "2026-03-21",
    equipos: {
      "SIC":            { j:["Francisco Calandra","Tadeo Ledesma","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Tomás Meyrelles","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Los Matreros":   { j:["Matías Salina","Boris Cec","Juan Pablo Zeiss","Tomas Gahan","Alejo Villafañe","Colin McCormack","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Segundo Plaza"], c:null },
      "Belgrano Ath.":  { j:["Mateo Etchecoin","Santiago Villegas","Eliseo Marchetti","Ramón Duggan","Augusto Vaccarino","Francisco Gradin","Julián Rebussone","Franco Vega","Theo Blacksley","Juan Aparicio","Pedro Arana","Ramón Arana","Tomás Etchepare","Tobías Bernabe","Juan Lando"], c:null },
      "Newman":         { j:["Miguel Prince","Beltrán Salese","Bautista Bosch","Francisco Lascombes","Alejandro Urtubey","Mateo Montoya","Pablo Cardinal","Rodrigo Díaz de Vivar","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortiz Basualdo","Benjamín Lanfranco","Simón Prince","Cruz Ulloa","Juan Bautista Daireaux"], c:null },
      "Buenos Aires":   { j:["Tomás Gallo","Tomás Ruiz","Renzo Zanella","Bautista Durañona","Bautista Saint Bonnet","Matías Espina","Pablo Bourdal","Juan Segundo Campbell","Mateo Freire","Tomás Bunge","Ignacio Bensadon","Agustín Lamensa","Ramiro Costa","Segundo Ortiz","Alejo Novo"], c:"Agustín Lamensa" },
      "Alumni":         { j:["Juan Cruz Bottoni","Tomás Bivort","Francisco Bottoni","Manuel Mora","Santiago Alduncin","Ignacio Cubilla","Juan Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Aquiles Vieyra","Filippo Testoni","Franco Sábato","Ramón Fuentes","Matías Del Franco"], c:null },
      "CUBA":           { j:["Francisco Garoby","Tomás Anderlic","Esteban Iribarne","Marcos Loza","Santiago Uriarte","Lucas Campion","Santiago Landau","Benito Ortíz de Rozas","Ignacio Albani","Valentín Mastroizzi","Pedro Castro Nevares","Felipe de la Vega","Marcos Young","Ramiro Cardini","Tomás Passaro"], c:null },
      "Champagnat":     { j:["Alberto Natan Adissi","Fernando Rodríguez Pascarella","Marcos Magaro","Santiago Escuti","Tobías Rivas Orozco","Matías Jesús Alonso Boto","Francisco Castelli Azpiroz","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Leo Mazzini","Eugenio Sartori","Ignacio Torrado","Benjamín Rivarola Rocca","Joaquín Sánchez","Felipe Hileman","Tomás Phelan","Matías Phelan","Benjamín Belaga","Francisco Lescano","Juan Akemeier"], c:null },
      "Hindú":          { j:["Franco Diviesti","Agustin Capurro","Nicolas Leiva","Elías Banach","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Ramon Fernández Miranda","Lisandro Rodríguez","Tomas Amher","Juan Aranoa"], c:null },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Francisco Echenique","Lucas Malanos","Felipe Nogués","Manuel Nogués","Nicolás Casals","Santiago Vitola","Ramiro Musio","Juan Cruz Bertero","Martín Elías"], c:null },
      "Regatas":        { j:["Tomás Barbaccia","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Agustín García Campos","Lucas Gobet","Felipe Camerlinckx","Esteban de la Torre","Justo Camerlinkckx","Enrique Camerlinckx","Mateo Camerlinckx","Francisco Pisani","Felipe Terra","Felipe Rugolo"], c:null },
      "Los Tilos":      { j:["Joaquin Briozzo","Hipolito San Sebastián","Maximo Laurin","Martin Leiva","Luciano Torboli","Felipe Bares","Eliseo Chiavassa","Bautista Gatti","Marcos Albina","Joaquín Tuculet","Gastón Martinez","Tomás Fernandez Armendariz","Alfonso López Feybli","Ignacio Guichon","Bautista Santamarina"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Joaquin Nuñez","Martin Patat","Bautista Ozog","Ivan Kucic","Segundo Pineda","Nicolas Chiappani","Tomás Bernasconi","Manuel De la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Luca Juliano","Francisco Cejas","Tomás Suárez Folch"], c:null },
    }
  },
  3: {
    fecha: 3, d: "2026-03-28",
    equipos: {
      "Los Matreros":   { j:["Matías Salina","Boris Cec","Juan Pablo Zeiss","Tomas Gahan","Alejo Villafañe","Colin McCormack","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Pablo García Michero"], c:null },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Ignacio Sapino","Lucas Malanos","Tomás Cornejo","Martín Elías","Nicolás Casals","Santiago Vitola","Ramiro Musio","Juan Cruz Bertero","Manuel Nogués"], c:null },
      "Regatas":        { j:["Tomás Barbaccia","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Agustín Lucas Gobet","Santiago Ruiz","Felipe Camerlinckx","Esteban de la Torre","José de la Torre","Enrique Camerlinckx","Mateo Camerlinckx","Francisco Pisani","Felipe Rugolo","Justo Camerlinckx"], c:null },
      "Los Tilos":      { j:["Manuel Puertas","Hipólito San Sebastián","Adriel Armenti","Gianluca Broglia","Luciano Torboli","Felipe Bares","Eliseo Chiavassa","Bautista Gatti","Marcos Albina","Joaquín Tuculet","Gastón Martínez","Tomás Fernandez Armendariz","Alfonso López Feybli","Nicolás Fernández Vega","Bautista Santamarina"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Joaquin Nuñez","Martin Patat","Bautista Ozog","Ivan Kucic","Segundo Pineda","Nicolas Chiappani","Tomás Bernasconi","Manuel De la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Francisco Cejas","Facundo Panigatti","Tomas Suarez Folch"], c:null },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Leo Mazzini","Eugenio Sartori","Ignacio Torrado","Benjamín Rocca Rivarola","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Tomás Phelan","Benjamín Belaga","Ramón Castillo","Juan Akemeier"], c:null },
      "Hindú":          { j:["Juan Ignacio Martínez Sosa","Agustin Capurro","Nicolas Leiva","Elías Banach","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Ramon Fernández Miranda","Lisandro Rodríguez","Sebastián Cancelliere","Juan Aranoa"], c:null },
      "CUBA":           { j:["Francisco Garoby","Tomás Anderlic","Esteban Iribarne","Santos Cayol","Santiago Uriarte","Lucas Campion","Juan Capdepont","Benito Ortíz de Rosas","Félix Corleto","Valentín Mastroizzi","Pedro Castro Nevares","Rafael Benedit","Felipe de la Vega","Ramiro Cardini","Tomás Passaro"], c:null },
      "Champagnat":     { j:["Honorio Basualdo Quintana","Fernando Rodríguez Pascarella","Marcos Magaro","Francisco Castelli Azpiroz","Santiago Escuti","Matías Jesús Alonso Boto","Tobías Rivas Orozco","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
      "Buenos Aires":   { j:["Tomás Gallo","Tomás Ruiz","Blas Coria","Bautista Durañona","Bautista Saint Bonnet","Tomás Etcheverry","Pablo Bourdal","Juan Segundo Campbell","Mateo Freire","Tomás Bunge","Segundo Ortiz","Agustín Lamensa","Ramiro Costa","Ignacio Bensadon","Alejo Novo"], c:"Agustín Lamensa" },
      "Newman":         { j:["Miguel Prince","Teófilo Mackinlay","Bautista Bosch","Francisco Lascombes","Alejandro Urtubey","Mateo Montoya","Joaquín de la Vega","Rodrigo Díaz de Vivar","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortiz Basualdo","Tomás Keena","Benjamín Lanfranco","Cruz Ulloa","Juan Bautista Daireaux"], c:null },
      "SIC":            { j:["Francisco Calandra","Lucas Rocha","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Alejandro Daireaux","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Alumni":         { j:["Juan Cruz Bottoni","Tomás Bivort","Francisco Bottoni","Manuel Mora","Santiago Alduncin","Ignacio Cubilla","Juan Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Aquiles Vieyra","Filippo Testoni","Franco Sábato","Ramón Fuentes","Matías Del Franco"], c:null },
      "Belgrano Ath.":  { j:["Mateo Etchecoin","Ignacio De Siena","Eliseo Marchetti","Ramon Duggan","Augusto Vaccarino","Francisco Gradin","Julian Rebusone","Franco Vega","Theo Blacksley","Juan Aparicio","Tobias Bernabé","Martin Arana","Tomas Etchepare","Pedro Arana","Juan Landó"], c:null },
    }
  },
  4: {
    fecha: 4, d: "2026-04-11",
    equipos: {
      "Newman":         { j:["Miguel Prince","Beltrán Salese","Manuel Lozano","Pablo Cardinal","Alejandro Urtubey","Mateo Montoya","Joaquín de la Vega","Rodrigo Díaz de Vivar","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortiz Basualdo","Benjamín Lanfranco","Cruz Ulloa","Carlos Vela","Juan Bautista Daireaux"], c:null },
      "Los Matreros":   { j:["Matías Salina","Boris Cec","Valentín Hardt","Tomas Gahan","Alejo Villafañe","Colin McCormack","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Pablo García Michero"], c:"Santiago Villarino" },
      "SIC":            { j:["Francisco Calandra","Lucas Rocha","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Tomás Meyrelles","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Alumni":         { j:["Juan Cruz Bottoni","Máximo Lamelas","Francisco Bottoni","Manuel Mora","Santiago Alduncin","Ignacio Cubilla","Juan Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Gonzalo Tapia","Filippo Testoni","Franco Sábato","Ramón Fuentes","Matías Del Franco"], c:null },
      "Belgrano Ath.":  { j:["Francisco Ferronato","Ignacio De Siena","Eliseo Marchetti","Ramón Duggan","Augusto Vaccarino","Francisco Gradin","Julian Rebusone","Jerónimo Sorondo","Theo Blacksley","Juan Landó","Octavio Carroll","Martin Arana","Tomas Etchepare","Tobias Bernabé","Pedro Arana"], c:null },
      "Champagnat":     { j:["Honorio Basualdo Quintana","Fernando Rodríguez Pascarella","Marcos Magaro","Tobías Rivas Orozco","Santiago Escuti","Matías Jesús Alonso Boto","Tomás Alonso Boto","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
      "Los Tilos":      { j:["Manuel Puertas","Hipólito San Sebastián","Adriel Armenti","Gianluca Broglia","Martín Leiva","Eliseo Chiavassa","Felipe Bares","Bautista Gatti","Pedro Rodríguez Alcobendas","Joaquín Tuculet","Ignacio Guichon","Tomás Fernandez Armendariz","Gastón Martínez","Nicolás Fernández Vega","Bautista Santamarina"], c:null },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Ignacio Sapino","Lucas Malanos","Tomás Cornejo","Martín Elías","Nicolás Casals","Ramiro Musio","Tomás Malanos","Juan Cruz Bertero","Manuel Nogués"], c:null },
      "Buenos Aires":   { j:["Tomás Herrador","Tomás Ruiz","Blas Coria","Bautista Durañona","Bautista Saint Bonnet","Tomás Freire","Pablo Bourdal","Simón Mimessi Sosa","Mateo Freire","Tomás Bunge","Ignacio Bensadon","Agustín Lamensa","Ramiro Costa","Benjamín Handley","Nicolás Pizzo"], c:"Agustín Lamensa" },
      "Hindú":          { j:["Franco Diviesti","Agustín Capurro","Nicolás Leiva","Elías Banach","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Ramon Fernández Miranda","Lisandro Rodríguez","Sebastián Cancelliere","Juan Aranoa"], c:null },
      "CUBA":           { j:["Francisco Garoby","Tomás Anderlic","Esteban Iribarne","Santos Cayol","Santiago Uriarte","Lucas Campion","Juan Capdepont","Benito Ortíz de Rosas","Félix Corleto","Valentín Mastroizzi","Pedro Castro Nevares","Rafael Benedit","Felipe de la Vega","Ramiro Cardini","Tomás Passaro"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Joaquin Nuñez","Martin Patat","Bautista Ozog","Ivan Kucic","Pedro Ringuelet","Nicolas Chiappani","Tomás Bernasconi","Manuel De la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Francisco Cejas","Facundo Panigatti","Tomas Suarez Folch"], c:null },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Leo Mazzini","Eugenio Sartori","Ignacio Torrado","Benjamín Rocca Rivarola","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Jerónimo Solveyra","Benjamín Belaga","Tomás Phelan","Juan Akemeier"], c:null },
      "Regatas":        { j:["Fabrizio Cebron","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Santiago Ruiz","Lucas Gobet","Felipe Camerlinckx","Esteban de la Torre","José de la Torre","Enrique Camerlinckx","Mateo Camerlinckx","Francisco Pisani","Juan Molina Campos","Justo Camerlinckx"], c:null },
    }
  },
  5: {
    fecha: 5, d: "2026-04-18",
    equipos: {
      "Alumni":         { j:["Juan Cruz Bottoni","Tomás Bivort","Guido Cambareri","Manuel Mora","Santiago Alduncin","Ignacio Cubilla","Juan Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Filippo Testoni","Franco Sábato","Mateo Castanier","Ramón Fuentes","Matías Del Franco"], c:null },
      "Newman":         { j:["James Wright","Beltrán Salese","Bautista Bosch","Pablo Cardinal","Francisco Lascombes","Mateo Montoya","Joaquín de la Vega","Teófilo Garay","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortiz Basualdo","Tomás Keena","Cruz Ulloa","Carlos Vela","Juan Bautista Daireaux"], c:null },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Ignacio Sapino","Lucas Malanos","Tomás Cornejo","Martín Elías","Nicolás Casals","Ramiro Musio","Tomás Malanos","Juan Cruz Bertero","Manuel Nogués"], c:null },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Ignacio Larrague","Eugenio Sartori","Ignacio Torrado","Benjamín Rocca Rivarola","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Jerónimo Solveyra","Benjamín Belaga","Tomás Phelan","Juan Akemeier"], c:null },
      "Regatas":        { j:["Tomás Barbaccia","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Santiago Ruiz","Lucas Gobet","Felipe Camerlinckx","Esteban de la Torre","José de la Torre","Francisco Pisani","Tobías Klapenbach","Ramiro Moadeb","Juan Molina Campos","Justo Camerlinckx"], c:null },
      "CUBA":           { j:["Francisco Garoby","Tomás Anderlic","Esteban Iribarne","Santos Cayol","Santiago Uriarte","Lucas Campion","Segundo Pisani","Benito Ortíz de Rosas","Félix Corleto","Valentín Mastroizzi","Bautista Casaurang","Rafael Benedit","Felipe de la Vega","Ramiro Cardini","Tomás Passaro"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Joaquín Núñez","Martin Patat","Bautista Ozog","Máximo Rivera","Francisco Ringuelet","Nicolás Chiappani","Tomás Bernasconi","Manuel de la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Luca Juliano","Facundo Panigatti","Tomas Suarez Folch"], c:null },
      "Buenos Aires":   { j:["Tomás Gallo","Tomás Rosasco","Renzo Zanella","Bautista Durañona","Bautista Saint Bonnet","Pablo Bourdal","Matías Espina","Juan Segundo Campbell","Nicolás Del Campo","Tomás Bunge","Ignacio Bensadon","Agustín Lamensa","Luis Prieto Martínez","Benjamín Handley","Nicolás Pizzo"], c:"Agustín Lamensa" },
      "Hindú":          { j:["Franco Diviesti","Agustín Capurro","Nicolás Leiva","Elías Banach","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Bautista Álvarez","Lisandro Rodríguez","Tomás Amher","Juan Aranoa"], c:null },
      "Belgrano Ath.":  { j:["Francisco Ferronato","Santiago Villegas","Eliseo Marchetti","Luciano Tecca","Ramón Duggan","Francisco Gradin","Julian Rebusone","Augusto Vaccarino","Theo Blacksley","Mateo Fossati","Octavio Carroll","Juan Brescia","Tomas Etchepare","Pedro Arana","Juan Landó"], c:null },
      "Los Matreros":   { j:["Matías Salina","Boris Cec","Valentín Hardt","Tomas Gahan","Alejo Villafañe","Mateo Cirelli","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Pablo García Michero"], c:"Santiago Villarino" },
      "Los Tilos":      { j:["Manuel Puertas","Cosme Carruccio","Adriel Armenti","Luciano Torboli","Martín Leiva","Eliseo Chiavassa","Felipe Bares","Bautista Gatti","Pedro Rodríguez Alcobendas","Joaquín Tuculet","Ignacio Guichon","Tomás Fernández Armendariz","Alfonso López Feybli","Gastón Martínez Salgado","Bautista Santamarina"], c:null },
      "Champagnat":     { j:["Honorio Basualdo Quintana","Fernando Rodríguez Pascarella","Tomás Yanzon","Francisco Castelli","Santiago Escuti","Matías Jesús Alonso Boto","Tomás Alonso Boto","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
      "SIC":            { j:["Francisco Calandra","Lucas Rocha","Ignacio Noel","Ciro Plorutti","Manuel Curuchaga","Alejandro Daireaux","Santos Fernández De Oliveira","Tomás Meyrelles","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
    }
  },
  6: {
    fecha: 6, d: "2026-04-25",
    equipos: {
      "SIC":            { j:["Francisco Calandra","Lucas Rocha","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Alejandro Daireaux","Mateo Albanese","Agustín Sascaro","Timoteo Silva","Carlos Pirán","Nicanor Acosta","Bernabé López Fleming","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Hindú":          { j:["Franco Diviesti","Agustín Capurro","Nicolás Leiva","Elías Banach","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Bautista Álvarez","Lisandro Rodríguez","Tomás Amher","Juan Aranoa"], c:null },
      "Belgrano Ath.":  { j:["Francisco Ferronato","Santiago Villegas","Eliseo Marchetti","Luciano Tecca","Ramon Duggan","Francisco Gradin","Julian Rebusone","Augusto Vaccarino","Theo Blacksley","Mateo Fossati","Octavio Carroll","Juan Brescia","Tomas Etchepare","Pedro Arana","Juan Landó"], c:null },
      "La Plata":       { j:["Ariel Del Cerro","Juan Martín Fontán","Martin Patat","Bautista Ozog","Tomás Bernasconi","Segundo Pineda","Nicolás Chiappani","Francisco Ringuelet","Manuel de la Fuente","Santino Di Lucca","Pedro Addiechi","Francisco Paz Rizzoli","Luca Juliano","Francisco Cejas","Tomas Suarez Folch"], c:null },
      "Buenos Aires":   { j:["Tomás Gallo","Tomás Rosasco","Renzo Zanella","Bautista Durañona","Bautista Saint Bonnet","Matías Espina","Pablo Bourdal","Simón Mimessi","Nicolás Del Campo","Tomás Bunge","Ignacio Bensadon","Agustín Lamensa","Luis Prieto Martínez","Benjamín Handley","Nicolás Pizzo"], c:"Agustín Lamensa" },
      "Regatas":        { j:["Diego Torres Agüero","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Agustín García Campos","Lucas Gobet","Felipe Camerlinckx","Esteban de la Torre","José de la Torre","Francisco Pisani","Tobías Klapenbach","Ramiro Moadeb","Felipe Tommasini","Justo Camerlinckx"], c:null },
      "CUBA":           { j:["Joaquín Yakiche","Juan Pedro Garoby","Esteban Iribarne","Santos Cayol","Santiago Uriarte","Juan Capdepont","Segundo Pisani","Benito Ortíz de Rosas","Félix Corleto","Valentín Mastroizzi","Bautista Casaurang","Rafael Benedit","Felipe de la Vega","Pedro Castro Nevares","Tomás Passaro"], c:null },
      "Atl. del Rosario":{ j:["Agustín Fernández","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Ignacio Sapino","Lucas Malanos","Tomás Cornejo","Martín Elías","Nicolás Casals","Ramiro Musio","Tomás Malanos","Juan Cruz Bertero","Manuel Nogués"], c:"Tomás Malanos" },
      "CASI":           { j:["Facundo Scaiano","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Ignacio Larrague","Eugenio Sartori","Ignacio Torrado","Benjamín Rocca Rivarola","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Jerónimo Solveyra","Benjamín Belaga","Tomás Phelan","Juan Akemeier"], c:null },
      "Los Tilos":      { j:["Manuel Puertas","Cosme Carruccio","Facundo Maffei","Bautista Gatti","Martin Leiva","Eliseo Chiavassa","Felipe Puertas","Felipe Bares","Pedro Rodriguez Alcobendas","Joaquin Tuculet","Ignacio Guichon","Tomás Fernandez Armendariz","Alfonso Lopez Feybli","Gaston Martinez Salgado","Bautista Santamarina"], c:null },
      "Alumni":         { j:["Juan Cruz Bottoni","Tomás Bivort","Guido Cambareri","Manuel Mora","Santiago Alduncin","Juan Cruz Alvariñas","Patricio Anderson","Santiago Neyra","Tomás Passerotti","Bautista Canzani","Mateo Castanier","Filippo Testoni","Franco Sábato","Ramiro Fuentes","Matías Del Franco"], c:null },
      "Los Matreros":   { j:["Augusto Genoud","Boris Cec","Valentín Hardt","Tomas Gahan","Alejo Villafañe","Agustín Córdoba","Juan Pablo Guevara","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Santiago Marelli","Pedro Del Busto","Nicolás Santecchia","German Gallastegui","Juan Pablo García Michero"], c:null },
      "Newman":         { j:["Miguel Prince","Beltrán Salese","Bautista Bosch","Marcos Garibaldi","Pablo Cardinal","Bautista Bonasso","Joaquín de la Vega","Teófilo Garay","Lucas Nava","Gonzalo Gutiérrez Taboada","Franco Lomginotti","Tomás Keena","Benjamín Lanfranco","Carlos Vela","Juan Bautista Daireaux"], c:null },
      "Champagnat":     { j:["Honorio Basualdo Quintana","Fernando Rodríguez Pascarella","Marcos Magaro","Francisco Castelli","Santiago Escuti","Matías Jesús Alonso Boto","Tobías Rivas Orozco","Nicolás Rojo","Juan Segundo Panelo","Santos Panelo","Bautista Rodríguez Navarro","Joaquín Bottazzi","Tomás Cotter Daireaux","Facundo Rufino","Gonzalo Costaguta"], c:null },
    }
  },
  7: {
    fecha: 7, d: "2026-05-09",
    equipos: {
      "La Plata":        { j:["Ariel Del Cerro","Juan Martín Fontán","Martin Patat","Bautista Ozog","Iván Kucic","Francisco Ringuelet","Nicolás Chiappani","Tomás Bernasconi","Manuel de la Fuente","Tomás Suárez Folch","Pedro Addiechi","Francisco Paz Rizzoli","Luca Juliano","Francisco Cejas","Francisco Annecchini"], c:"Tomás Bernasconi" },
      "SIC":             { j:["Francisco Calandra","Lucas Rocha","Benjamín Chiappe","Ciro Plorutti","Manuel Curuchaga","Andrea Panzarini","Santos Fernández De Oliveira","Alejandro Daireaux","Mateo Albanese","Agustín Sascaro","Bernabé López Fleming","Carlos Pirán","Nicanor Acosta","Timoteo Silva","Francisco González Capdevilla"], c:"Mateo Albanese" },
      "Atl. del Rosario":{ j:["Ezequiel Reyes","Ramiro Rubio","Bruno Montenegro","José Cáceres","Octavio Capella","Federico Etcheverry","Ignacio Sapino","Lucas Malanos","Tomás Cornejo","Manuel Nogués","Nicolás Casals","Ramiro Musio","Tomás Malanos","Juan Cruz Bertero","Martín Elías"], c:"Tomás Malanos" },
      "Buenos Aires":    { j:["Tomás Gallo","Tomás Rosasco","Renzo Zanella","Francisco Syriani","Bautista Saint Bonnet","Francisco Ibarra","Simón Mimessi","Juan Segundo Campbell","Nicolás Del Campo","Mateo Capalbo","Julián Quetglas","Agustín Lamensa","Luis Prieto Martínez","Benjamín Handley","Nicolás Pizzo"], c:"Agustín Lamensa" },
      "Regatas":         { j:["Tomás Barbaccia","Beltrán Landivar","Juan Manuel Gobet","Valentín Sanguinetti","Tomás Sanguinetti","Agustín García Campos","Santiago Ruiz","Felipe Camerlinckx","Esteban de la Torre","José de la Torre","Enrique Camerlinckx","Mateo Camerlinckx","Tobías Klapenbach","Felipe Rugolo","Justo Camerlinckx"], c:null },
      "Belgrano Ath.":   { j:["Francisco Ferronato","Santiago Villegas","Eliseo Marchetti","Luciano Tecca","Ramón Duggan","Francisco Gradín","Julian Rebusone","Augusto Vaccarino","Theo Blacksley","Mateo Fossati","Bautista Fossati","Juan Brescia","Martín Arana","Pedro Arana","Juan Landó"], c:"Julian Rebusone" },
      "Los Tilos":       { j:["Manuel Puertas","Cosme Carruccio","Facundo Maffei","Martin Leiva","Luciano Torboli","Felipe Puertas","Eliseo Chiavassa","Bautista Gatti","Pedro Rodriguez Alcobendas","Joaquin Tuculet","Ignacio Guichon","Tomás Fernandez Armendariz","Alfonso Lopez Feybli","Gaston Martinez Salgado","Bautista Santamarina"], c:null },
      "CUBA":            { j:["Joaquín Yakiche","Juan Pedro Garoby","Esteban Iribarne","Santiago Uriarte","Santos Cayol","Juan Capdepont","Segundo Pisani","Benito Ortíz de Rosas","Félix Corleto","Valentín Mastroizzi","Pedro Castro Nevares","Rafael Benedit","Felipe de la Vega","Bautista Casaurang","Tomás Passaro"], c:null },
      "Champagnat":      { j:["Honorio Basualdo Quintana","Fernando Rodríguez Pascarella","Tomás Yanzón","Tobías Rivas Orozco","Santiago Escuti","Matías Jesús Alonso Boto","Francisco Castelli","Nicolás Rojo","Juan Segundo Panelo","Simón De Olmos","Bautista Rodríguez Navarro","Simón Villanueva","Tomás Cotter Daireaux","Simón Zappella","Gonzalo Costaguta"], c:null },
      "Alumni":          { j:["Máximo Castrillo","Tomás Bivort","Franco Cozzi","Manuel Mora","Sebastián Fauve","Ignacio Cubilla","Patricio Anderson","Santiago Neyra","Tomás Passerotti","Fermín García Belmonte","Mateo Castanier","Filippo Testoni","Tomás Cubilla","Ramón Fuentes","Matías Del Franco"], c:null },
      "Los Matreros":    { j:["Matías Salina","Boris Cec","Valentín Hardt","Tomas Gahan","Juan Pablo Guevara","Agustín Córdoba","Colin McCormack","Santiago Villarino","Marcos Amorisa","Juan Francisco Morales","Marko Biudes","Rocco Bendini","Nicolás Santecchia","German Gallastegui","Juan Pablo García Michero"], c:"Santiago Villarino" },
      "CASI":            { j:["Joaquín Britto","Juan Bautista Torres Obeid","Félix Paolucci","Salvador Ochoa","Ignacio Larrague","Eugenio Sartori","Joaquín Saenz de Miera","Ignacio Torrado","Joaquín Sánchez","Felipe Hileman","Francisco Lescano","Jerónimo Solveyra","Benjamín Belaga","Tomás Phelan","Juan Akemeier"], c:null },
      "Hindú":           { j:["Juan Ignacio Martínez Sosa","Agustín Capurro","Nicolás Leiva","Tomás Scallan","Juan Comolli","Santino Amaya","Lautaro Bávaro","Nicolás Amaya","Felipe Ezcurra","Fermín Ormaechea","Facundo Graglia","Bautista Álvarez","Lisandro Rodríguez","Tomás Amher","Juan Aranoa"], c:null },
      "Newman":          { j:["Miguel Prince","Beltrán Salese","Manuel Lozano","Pablo Cardinal","Pablo Fortín","Teófilo Garay","Joaquín de la Vega","Rodrigo Díaz de Vivar","Lucas Nava","Gonzalo Gutiérrez Taboada","Justo Ortíz Basualdo","Tomás Keena","Benjamín Lanfranco","Franco Lomginotti","Juan Bautista Daireaux"], c:null },
    }
  },
};

const POS_CLAVE = [2, 8, 9, 10, 15]; // índices base-1


// ── SRA — Jugadores que regresan automáticamente como titulares ──
// Cuando aparecen en la formación, son considerados titular indiscutido
const SRA_TITULARES = {
  "Newman":        { 8: "Lucas Marguery" },       // 9-SH
  "SIC":           { 1: "Ignacio Bottazzini" },    // 2-Hooker (o Ledesma)
  "Hindú":         { 7: "Juan Pedro Bernasconi" }, // 8-Octavo
  "Belgrano Ath.": { 7: "Jerónimo Sorondo", 9: "Mateo Fossati", 1: "Francisco Lusarreta" }, // 8,10,2
  "Champagnat":    { 7: "Matías Muniagurria" },    // 8-Octavo
  "La Plata":      { 7: "Juan Pedro Bernasconi" }, // 8-Octavo
};

// Pesos por fecha para la ventana temporal ponderada
// Fechas tempranas pesan más (titular establecido) → fechas tardías pesan menos
function getPesoFecha(fecha, totalFechas) {
  // Peso decreciente: F1=5, F2=5, F3=4, F4=4, F5=3, F6=2, F7+=2
  const pesos = [5, 5, 4, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
  return pesos[fecha - 1] || 2;
}

const POS_CLAVE_IDX = [1, 7, 8, 9, 14]; // índices 0-based en array de 15 jugadores


// ── IR — Índice de Rotación ───────────────────────────────────────
// Cuenta cambios totales entre la formación actual y la anterior
// Solo informativo — no impacta la predicción
function calcRotacion(equipo, fechaActual) {
  if(!FORMACIONES || fechaActual <= 1) return null;

  const fechasDisp = Object.keys(FORMACIONES).map(Number).sort((a,b)=>b-a);
  const fechaAnterior = fechasDisp.find(f => f < fechaActual && FORMACIONES[f]?.equipos[equipo]);
  if(!fechaAnterior) return null;

  const formActual   = FORMACIONES[fechaActual]?.equipos[equipo];
  const formAnterior = FORMACIONES[fechaAnterior]?.equipos[equipo];
  if(!formActual || !formAnterior) return null;

  const apellido = n => n ? n.split(" ").slice(-1)[0].toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"") : "";

  let cambios = 0;
  for(let i = 0; i < 15; i++) {
    const apActual   = apellido(formActual.j[i]);
    const apAnterior = apellido(formAnterior.j[i]);
    if(apActual && apAnterior && apActual !== apAnterior) cambios++;
  }

  const nivel = cambios <= 2 ? "normal" : cambios <= 4 ? "moderado" : cambios <= 6 ? "alto" : "severo";
  const color = cambios <= 2 ? null : cambios <= 4 ? "#f59e0b" : cambios <= 6 ? "#dc2626" : "#7c1d1d";

  return { cambios, nivel, color, fechaAnterior };
}

// ── TAB FORMACIONES ───────────────────────────────────────────
function TabFormaciones() {
  const fechas = Object.keys(FORMACIONES).map(Number).sort((a,b)=>a-b);
  const equiposList = Object.keys(FORMACIONES[1].equipos).sort();
  const [selectedFecha, setSelectedFecha] = useState(Math.max(...Object.keys(FORMACIONES).map(Number)));
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  const [view, setView] = useState("tabla"); // "tabla" | "equipo"

  const gc = eq => ({"Newman":"#1a1a2e","SIC":"#0f3460","Hindú":"#16213e","CASI":"#533483","Alumni":"#d62828","CUBA":"#023e8a","Los Tilos":"#2d6a4f","La Plata":"#1b4332","Champagnat":"#6d4c41","Regatas":"#0077b6","Belgrano Ath.":"#e76f51","Buenos Aires":"#457b9d","Los Matreros":"#6a0572","Atl. del Rosario":"#7b2d8b"}[eq]||"#334155");

  // Calcular continuidad de jugadores por posición clave
  function getContinuidad(equipo, pos) {
    // pos es 1-based (2, 8, 9, 10, 15)
    const idx = pos - 1;
    const results = [];
    Object.keys(FORMACIONES).sort((a,b)=>+a-+b).forEach(f => {
      const eqData = FORMACIONES[f].equipos[equipo];
      if(eqData) results.push({ f: +f, jugador: eqData.j[idx] });
    });
    return results;
  }

  function normalizeNombre(n) {
    // Normaliza para comparación: sin acentos, minúsculas, solo apellido
    return (n||"").split(" ").slice(-1)[0].toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  }

  function getScore(equipo, pos) {
    const hist = getContinuidad(equipo, pos);
    if(!hist.length) return null;
    // Ventana temporal ponderada: fechas tempranas pesan más
    const scores = {};
    const nombreCanon = {};
    hist.forEach(h => {
      const key = normalizeNombre(h.jugador);
      const peso = getPesoFecha(h.f, hist.length);
      scores[key] = (scores[key]||0) + peso;
      if(!nombreCanon[key] || h.jugador.length > (nombreCanon[key]||"").length) {
        nombreCanon[key] = h.jugador;
      }
    });
    // Verificar si hay titular SRA para esta posición
    const idx = POS_CLAVE_IDX[[2,8,9,10,15].indexOf(pos)];
    const sraTit = idx !== undefined ? SRA_TITULARES[equipo]?.[idx] : null;
    const sraNorm = sraTit ? normalizeNombre(sraTit) : null;
    // Si existe titular SRA, darle peso extra
    if(sraNorm && scores[sraNorm]) scores[sraNorm] += 10;

    const titularEntry = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
    const totalPeso = Object.values(scores).reduce((a,b)=>a+b,0);
    const pct = Math.round(titularEntry[1]/totalPeso*100);
    return {
      titular: nombreCanon[titularEntry[0]],
      titularKey: titularEntry[0],
      fechas: hist.filter(h=>normalizeNombre(h.jugador)===titularEntry[0]).length,
      total: hist.length,
      pct: Math.min(pct, 100)
    };
  }

  const fechaData = FORMACIONES[selectedFecha];

  return (
    <div>
      {/* Sub-tabs */}
      <div style={{display:"flex",gap:0,marginBottom:16,borderBottom:"2px solid #e2e8f0"}}>
        {[["tabla","📋 Columna vertebral"],["equipo","🏉 Por equipo"]].map(([k,l])=>(
          <button key={k} onClick={()=>setView(k)}
            style={{padding:"10px 16px",border:"none",background:"transparent",cursor:"pointer",fontSize:13,
              color:view===k?"#0f3460":"#64748b",fontWeight:view===k?700:400,
              borderBottom:view===k?"2px solid #0f3460":"2px solid transparent",marginBottom:-2,fontFamily:"inherit"}}>
            {l}
          </button>
        ))}
        {/* Selector de fecha — dropdown escalable */}
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:12,color:"#64748b"}}>Fecha:</span>
          <select value={selectedFecha} onChange={e=>setSelectedFecha(+e.target.value)}
            style={{padding:"5px 10px",borderRadius:6,border:"1px solid #e2e8f0",fontSize:13,
              color:"#0f3460",fontWeight:600,cursor:"pointer",background:"#fff",fontFamily:"inherit"}}>
            {fechas.map(f=>(
              <option key={f} value={f}>F{f} · {FORMACIONES[f].d.slice(5).replace("-","/")}</option>
            ))}
          </select>
        </div>
      </div>

      {/* VISTA TABLA — columna vertebral */}
      {view==="tabla"&&(
        <div>
          <div style={{fontSize:11,color:"#64748b",marginBottom:12}}>
            Posiciones clave: <strong>2</strong> (hooker) · <strong>8</strong> (octavo) · <strong>9</strong> (scrum half) · <strong>10</strong> (apertura) · <strong>15</strong> (fullback)
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
              <thead>
                <tr style={{background:"#0f2027"}}>
                  {["Equipo","2 — Hooker","8 — Octavo","9 — Scrum Half","10 — Apertura","15 — Fullback","Capitán"].map(h=>(
                    <th key={h} style={{color:"#fff",padding:"9px 8px",textAlign:"left",fontWeight:600,fontSize:11,whiteSpace:"nowrap"}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(fechaData.equipos).sort((a,b)=>a[0].localeCompare(b[0])).map(([eq,data],i)=>{
                  const j = data.j;
                  return (
                    <tr key={eq} style={{borderBottom:"1px solid #f1f5f9",background:i%2===0?"#fff":"#f8fafc",cursor:"pointer"}}
                      onClick={()=>{setSelectedEquipo(eq);setView("equipo");}}>
                      <td style={{padding:"8px",fontWeight:600}}>
                        <div style={{display:"flex",alignItems:"center",gap:6}}>
                          <span style={{width:8,height:8,borderRadius:"50%",background:gc(eq),display:"inline-block",flexShrink:0}}/>
                          {eq}
                        </div>
                      </td>
                      <td style={{padding:"8px",color:"#374151"}}>{j[1]}</td>
                      <td style={{padding:"8px",color:"#374151"}}>{j[7]}</td>
                      <td style={{padding:"8px",color:"#374151"}}>{j[8]}</td>
                      <td style={{padding:"8px",color:"#374151"}}>{j[9]}</td>
                      <td style={{padding:"8px",color:"#374151"}}>{j[14]}</td>
                      <td style={{padding:"8px"}}>
                        {data.c
                          ? <span style={{background:"#fef3c7",color:"#92400e",padding:"2px 6px",borderRadius:4,fontSize:11,fontWeight:600}}>{data.c} (C)</span>
                          : <span style={{color:"#94a3b8",fontSize:11}}>—</span>
                        }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{fontSize:11,color:"#94a3b8",marginTop:8,textAlign:"right"}}>
            Hacé click en un equipo para ver la formación completa
          </div>
        </div>
      )}

      {/* VISTA EQUIPO — formación completa + continuidad */}
      {view==="equipo"&&(
        <div>
          {/* Selector de equipo */}
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
            {equiposList.map(eq=>(
              <button key={eq} onClick={()=>setSelectedEquipo(eq)}
                style={{padding:"5px 12px",borderRadius:6,border:"1px solid #e2e8f0",fontSize:12,cursor:"pointer",
                  background:selectedEquipo===eq?gc(eq):"#fff",
                  color:selectedEquipo===eq?"#fff":"#374151",
                  fontWeight:selectedEquipo===eq?700:400}}>
                {eq}
              </button>
            ))}
          </div>

          {selectedEquipo&&fechaData.equipos[selectedEquipo]&&(()=>{
            const data = fechaData.equipos[selectedEquipo];
            const posNombres = ["Pilar izq.","Hooker","Pilar der.","2ª línea","2ª línea","Ala","Ala","Octavo","Scrum Half","Apertura","Wing","Centro","Centro","Wing","Fullback"];
            return (
              <div>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                  <span style={{width:14,height:14,borderRadius:"50%",background:gc(selectedEquipo),display:"inline-block"}}/>
                  <h3 style={{margin:0,fontSize:16,color:"#0f2027"}}>{selectedEquipo} — Fecha {selectedFecha}</h3>
                  {data.c&&<span style={{background:"#fef3c7",color:"#92400e",padding:"3px 8px",borderRadius:4,fontSize:12,fontWeight:600}}>{data.c} (C)</span>}
                </div>

                {/* Formación completa */}
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:20}}>
                  {data.j.map((jugador,i)=>{
                    const pos = i+1;
                    const esClave = POS_CLAVE.includes(pos);
                    return (
                      <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 10px",borderRadius:8,
                        background:esClave?"#eff6ff":"#f8fafc",
                        border:esClave?"1px solid #bfdbfe":"1px solid #e2e8f0"}}>
                        <span style={{fontSize:13,fontWeight:700,color:esClave?"#1e40af":"#94a3b8",minWidth:20,textAlign:"right"}}>{pos}</span>
                        <span style={{fontSize:11,color:"#64748b",minWidth:70}}>{posNombres[i]}</span>
                        <span style={{fontSize:13,color:"#0f172a",fontWeight:esClave?600:400}}>{jugador}</span>
                        {data.c===jugador&&<span style={{marginLeft:"auto",fontSize:10,background:"#fef3c7",color:"#92400e",padding:"1px 5px",borderRadius:3,fontWeight:700}}>C</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Continuidad posiciones clave */}
                {Object.keys(FORMACIONES).length > 1 && (
                  <div>
                    {/* Rotación entre fechas */}
                  {(()=>{
                    const fechas = Object.keys(FORMACIONES).map(Number).sort((a,b)=>a-b);
                    const rotaciones = fechas.slice(1).map(f => {
                      const r = calcRotacion(selectedEquipo, f);
                      return r ? { f, ...r } : null;
                    }).filter(Boolean);
                    if(!rotaciones.length) return null;
                    return (
                      <div style={{marginBottom:16}}>
                        <div style={{fontSize:12,fontWeight:700,color:"#64748b",letterSpacing:2,textTransform:"uppercase",marginBottom:8,borderLeft:"3px solid #0f3460",paddingLeft:10}}>
                          Rotación entre fechas
                        </div>
                        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                          {rotaciones.map(r=>(
                            <div key={r.f} style={{padding:"4px 10px",borderRadius:6,fontSize:11,fontWeight:600,
                              background:r.cambios<=2?"#f0fdf4":r.cambios<=4?"#fef3c7":r.cambios<=6?"#fee2e2":"#fecaca",
                              color:r.cambios<=2?"#166534":r.cambios<=4?"#92400e":r.cambios<=6?"#991b1b":"#7c1d1d",
                              border:"1px solid",
                              borderColor:r.cambios<=2?"#bbf7d0":r.cambios<=4?"#fde68a":r.cambios<=6?"#fca5a5":"#f87171"}}>
                              F{r.fechaAnterior}→F{r.f}: {r.cambios} cambio{r.cambios!==1?"s":""}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                  <div style={{fontSize:12,fontWeight:700,color:"#64748b",letterSpacing:2,textTransform:"uppercase",marginBottom:8,borderLeft:"3px solid #0f3460",paddingLeft:10}}>
                      Continuidad por posición clave
                    </div>
                    {POS_CLAVE.map(pos=>{
                      const score = getScore(selectedEquipo, pos);
                      const hist = getContinuidad(selectedEquipo, pos);
                      if(!score) return null;
                      const posN = posNombres[pos-1];
                      const color = score.pct>=80?"#16a34a":score.pct>=60?"#f59e0b":"#dc2626";
                      return (
                        <div key={pos} style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 14px",marginBottom:6}}>
                          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                            <span style={{fontWeight:700,color:"#1e40af",minWidth:20}}>{pos}</span>
                            <span style={{fontSize:12,color:"#64748b"}}>{posN}</span>
                            <span style={{fontWeight:600,fontSize:13}}>{score.titular}</span>
                            <span style={{marginLeft:"auto",fontSize:12,fontWeight:700,color}}>{score.pct}% titular</span>
                          </div>
                          <div style={{display:"flex",gap:4}}>
                            {hist.map(h=>(
                              <div key={h.f} style={{textAlign:"center"}}>
                                <div style={{fontSize:10,color:"#94a3b8"}}>F{h.f}</div>
                                <div style={{fontSize:11,padding:"2px 6px",borderRadius:4,
                                  background:normalizeNombre(h.jugador)===score.titularKey?"#dbeafe":"#fee2e2",
                                  color:normalizeNombre(h.jugador)===score.titularKey?"#1e40af":"#991b1b",
                                  fontWeight:600,whiteSpace:"nowrap"}}>
                                  {h.jugador.split(" ").slice(-1)[0]}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}



// ── IFF — Índice de Fortaleza de Formación ────────────────────────
// Solo activa con 2+ bajas en posiciones clave (2,8,9,10,15)
// Penalidad: -5 pts por cada baja confirmada
// Usa ventana temporal ponderada: fechas tempranas pesan más
function calcIFF(equipo, fechaActual) {
  if(!FORMACIONES || fechaActual <= 1) return { pen: 0, bajas: [] };

  const formActual = FORMACIONES[fechaActual]?.equipos[equipo];
  if(!formActual) return { pen: 0, bajas: [] };

  const norm = n => (n||"").split(" ").slice(-1)[0].toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"");

  const bajas = [];
  const fechasPrev = Object.keys(FORMACIONES).map(Number).filter(f => f < fechaActual);

  POS_CLAVE_IDX.forEach(idx => {
    const posNum = [2,8,9,10,15][POS_CLAVE_IDX.indexOf(idx)];
    const posNombre = {2:"Hooker",8:"Octavo",9:"Scrum Half",10:"Apertura",15:"Fullback"}[posNum];

    // 1. Verificar si hay un titular SRA que volvió
    const sraTitular = SRA_TITULARES[equipo]?.[idx];
    if(sraTitular) {
      const actualApellido = norm(formActual.j[idx]);
      const sraApellido = norm(sraTitular);
      // Si el SRA titular está jugando → no hay baja
      if(actualApellido === sraApellido) return;
      // Si el SRA titular NO está → baja automática (es el titular real)
      // Solo aplicar si el SRA jugó en fechas previas del torneo
      const sraJugo = fechasPrev.some(f => {
        const eq = FORMACIONES[f]?.equipos[equipo];
        return eq && norm(eq.j[idx]) === sraApellido;
      });
      if(sraJugo) {
        let titularNombre = sraTitular;
        bajas.push({ pos: posNum, posNombre, titular: titularNombre, reemplazante: formActual.j[idx] });
        return;
      }
    }

    // 2. Ventana temporal ponderada — fechas tempranas pesan más
    const scores = {};
    const nombreCanon = {};
    fechasPrev.forEach(f => {
      const eq = FORMACIONES[f]?.equipos[equipo];
      if(!eq || !eq.j[idx]) return;
      const apellido = norm(eq.j[idx]);
      const peso = getPesoFecha(f, fechaActual);
      scores[apellido] = (scores[apellido] || 0) + peso;
      if(!nombreCanon[apellido] || eq.j[idx].length > (nombreCanon[apellido]||"").length) {
        nombreCanon[apellido] = eq.j[idx];
      }
    });

    if(!Object.keys(scores).length) return;

    // Titular = mayor puntaje ponderado
    const titularEntry = Object.entries(scores).sort((a,b) => b[1]-a[1])[0];
    const titularApellido = titularEntry[0];
    const actualApellido = norm(formActual.j[idx]);

    // Solo es baja si el titular ponderado tiene ventaja significativa (>= 4 puntos más)
    // Evita falsos positivos en rotaciones normales
    const segundoScore = Object.entries(scores).sort((a,b) => b[1]-a[1])[1]?.[1] || 0;
    const ventaja = titularEntry[1] - segundoScore;

    if(actualApellido !== titularApellido && ventaja >= 4) {
      bajas.push({
        pos: posNum, posNombre,
        titular: nombreCanon[titularApellido] || titularApellido,
        reemplazante: formActual.j[idx],
        scoreT: titularEntry[1], ventaja
      });
    }
  });

  const pen = bajas.length >= 2 ? bajas.length * -5 : 0;
  return { pen, bajas, activo: bajas.length >= 2 };
}

// ── TAB CUOTAS ────────────────────────────────────────────────
function TabCuotas({arr, equipos, elos}) {
  const STORAGE_KEY = "urba_cuotas_stable";
  const TRACKER_KEY = "urba_tracker_stable";

  // cuotas[fecha][partido_id] = {local, visitante, cuotaL, cuotaV, cuotaE, locked}
  const [cuotas, setCuotas] = useState({});
  const [tracker, setTracker] = useState([]);
  const [saved, setSaved] = useState(false);
  const [subTab, setSubTab] = useState("carga"); // "carga" | "tracker"
  const [selectedFecha, setSelectedFecha] = useState(null);
  const [editingFecha, setEditingFecha] = useState(null);
  const [bookmakers, setBookmakers] = useState({}); // {fecha: "Stake"|"Bet365"|"otro"}

  function toggleFecha(f) {
    setSelectedFecha(prev => prev === f ? null : f);
  }

  async function saveBM(f, bm) {
    const newBM = {...bookmakers, [f]: bm};
    setBookmakers(newBM);
    try { await window.storage.set("urba_bookmakers_v1", JSON.stringify(newBM)); } catch(e){}
  }

  // Load from storage
  useEffect(()=>{
    (async()=>{
      try {
        // Try stable key first, then fallback to old key
        let rc = await window.storage.get("urba_cuotas_stable").catch(()=>null);
        if(!rc) rc = await window.storage.get("urba_cuotas_v1").catch(()=>null);
        let loadedCuotas = {};
        if(rc && rc.value) {
          try { loadedCuotas = JSON.parse(rc.value); } catch(e){}
        }
        // Always inject DEFAULT_CUOTAS for any fecha not already in storage
        // or where storage entry has no odds loaded
        const merged = {...loadedCuotas};
        Object.entries(DEFAULT_CUOTAS).forEach(([f, partidos]) => {
          const stored = merged[f];
          const hasOdds = stored && Object.values(stored).some(p=>p.stakeL||p.b365L);
          if(!hasOdds) merged[f] = partidos;
        });
        setCuotas(merged);

        let rt = await window.storage.get("urba_tracker_stable").catch(()=>null);
        if(!rt) rt = await window.storage.get("urba_tracker_v1").catch(()=>null);
        let loadedTracker = [];
        if(rt && rt.value) { try{ loadedTracker = JSON.parse(rt.value); }catch(e){} }
        // Always inject DEFAULT_TRACKER entries not already present
        const trackerIds = new Set(loadedTracker.map(t=>t.id));
        const mergedTracker = [...loadedTracker, ...DEFAULT_TRACKER.filter(t=>!trackerIds.has(t.id))];
        setTracker(mergedTracker);

        const rb = await window.storage.get("urba_bookmakers_v1").catch(()=>null);
        if(rb && rb.value) setBookmakers(JSON.parse(rb.value));
      } catch(e){}
    })();
  },[]);

  // Save cuotas
  async function saveCuotas(data) {
    setCuotas(data);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(data)); } catch(e){}
    setSaved(true); setTimeout(()=>setSaved(false),1500);
  }

  // Save tracker
  async function saveTracker(data) {
    setTracker(data);
    try { await window.storage.set(TRACKER_KEY, JSON.stringify(data)); } catch(e){}
    setSaved(true); setTimeout(()=>setSaved(false),1500);
  }

  // Get current 2026 fechas played + next
  const p2026 = arr.filter(p=>p.t===2026);
  const fechasJugadas = [...new Set(p2026.map(p=>p.f))].sort((a,b)=>a-b);
  const proximaFecha = fechasJugadas.length > 0 ? Math.max(...fechasJugadas) + 1 : 1;
  const fechasCargadas = Object.keys(cuotas).map(Number).sort((a,b)=>a-b);

  // ELO-based prediction
  function getPredModel(local, visitante) {
    const eL = elos[local]||1500, eV = elos[visitante]||1500;
    let p = 100/(1+Math.pow(10,(eV-eL)/400));
    p = Math.max(5, Math.min(95, p));
    return { probL: Math.round(p), probV: Math.round(100-p) };
  }

  function impliedProb(cuota) {
    if(!cuota || cuota <= 1) return null;
    return Math.round(100/cuota);
  }

  function calcOverround(cL, cV, cE) {
    // Margen del bookmaker (overround): suma de probabilidades implícitas - 100
    const sum = (cL?100/cL:0) + (cV?100/cV:0) + (cE?100/cE:0);
    return sum > 0 ? Math.round((sum-100)*10)/10 : null;
  }

  function calcValue(probModel, cuota) {
    if(!cuota || cuota <= 1 || !probModel) return null;
    return Math.round((probModel/100 * cuota - 1)*100)/100;
  }

  // Add a new fecha to cuotas
  function addFecha(f) {
    const partidos_f = p2026.filter(p=>p.f===f);
    // If fecha is already played, use real matchups; otherwise let user define
    if(partidos_f.length === 0) return;
    const newCuotas = {...cuotas};
    if(!newCuotas[f]) {
      newCuotas[f] = {};
      partidos_f.forEach(p=>{
        newCuotas[f][p.id] = {local:p.local, visitante:p.visitante, stakeL:"", stakeV:"", stakeE:"", b365L:"", b365V:"", b365E:"", locked:false, resultado:null};
      });
    }
    saveCuotas(newCuotas);
  }

  // Add proxima fecha manually
  function addProximaFecha(partidos) {
    const newCuotas = {...cuotas};
    newCuotas[proximaFecha] = {};
    partidos.forEach((p,i)=>{
      newCuotas[proximaFecha]["26_f"+proximaFecha+"_"+i] = {local:p.local, visitante:p.visitante, stakeL:"", stakeV:"", stakeE:"", b365L:"", b365V:"", b365E:"", locked:false, resultado:null};
    });
    saveCuotas(newCuotas);
  }

  function updateCuota(f, id, field, val) {
    const newC = {...cuotas, [f]:{...cuotas[f], [id]:{...cuotas[f][id], [field]:val}}};
    saveCuotas(newC);
  }

  function lockFecha(f) {
    const newC = {...cuotas};
    Object.keys(newC[f]).forEach(id=>{ newC[f][id].locked = true; });
    // Create tracker entries
    const entries = Object.entries(newC[f]).map(([id,p])=>{
      const pred = getPredModel(p.local, p.visitante);
      return { id, fecha:f, local:p.local, visitante:p.visitante,
        cuotaL:parseFloat(p.cuotaL)||null, cuotaV:parseFloat(p.cuotaV)||null,
        probModelL:pred.probL, probModelV:pred.probV,
        probMktL:impliedProb(parseFloat(p.cuotaL)), probMktV:impliedProb(parseFloat(p.cuotaV)),
        valueL:calcValue(pred.probL, parseFloat(p.cuotaL)),
        valueV:calcValue(pred.probV, parseFloat(p.cuotaV)),
        resultado:null, lockedAt: new Date().toISOString()
      };
    });
    const existing = tracker.filter(t=>t.fecha!==f);
    saveTracker([...existing, ...entries]);
    saveCuotas(newC);
  }

  const [exportModal, setExportModal] = useState(null); // null | texto

  function exportarFecha(f) {
    const fechaData = cuotas[f];
    if(!fechaData) return;
    const isLocked = Object.values(fechaData).every(p=>p.locked);
    const lines = [];
    lines.push("=== FECHA " + f + (isLocked?" [BLOQUEADA]":"") + " ===");
    Object.values(fechaData).forEach(p=>{
      const pred = getPredModel(p.local, p.visitante);
      lines.push(p.local + " vs " + p.visitante);
      lines.push("  Modelo: " + pred.probL + "% local / " + pred.probV + "% visitante");
      if(p.stakeL||p.stakeV) lines.push("  Stake: L=" + (p.stakeL||"—") + " E=" + (p.stakeE||"—") + " V=" + (p.stakeV||"—"));
      if(p.b365L||p.b365V)  lines.push("  Bet365: L=" + (p.b365L||"—") + " E=" + (p.b365E||"—") + " V=" + (p.b365V||"—"));
      // resultados del tracker si existen
      const tr = tracker.find(t=>t.local===p.local&&t.visitante===p.visitante&&t.fecha===+f);
      if(tr && tr.resultado) {
        const acierto=(tr.resultado==="L"&&tr.probModelL>=tr.probModelV)||(tr.resultado==="V"&&tr.probModelV>tr.probModelL);
        lines.push("  Resultado: " + (tr.resultado==="L"?"Ganó "+tr.local:tr.resultado==="V"?"Ganó "+tr.visitante:"Empate") + " " + (acierto?"✓":"✗"));
      }
    });
    setExportModal(lines.join("\n"));
  }

  function setResultado(id, res) {
    const newT = tracker.map(t=> t.id===id ? {...t, resultado:res} : t);
    setTracker(newT);
    // Save to storage with retry
    (async () => {
      try {
        await window.storage.set(TRACKER_KEY, JSON.stringify(newT));
        setSaved(true); setTimeout(()=>setSaved(false),2000);
      } catch(e) {
        // Storage failed - show alert with manual copy option
        const entry = newT.find(t=>t.id===id);
        if(entry) {
          alert(`Guardado en pantalla.\nPara no perder este resultado, anotá:\nF${entry.fecha} ${entry.local} vs ${entry.visitante} → ${res==="L"?"Ganó "+entry.local:res==="V"?"Ganó "+entry.visitante:"Empate"}`);
        }
      }
    })();
  }

  const gc = eq => ({"Newman":"#1a1a2e","SIC":"#0f3460","Hindú":"#16213e","CASI":"#533483","Alumni":"#d62828","CUBA":"#023e8a","Los Tilos":"#2d6a4f","La Plata":"#1b4332","Champagnat":"#6d4c41","Regatas":"#0077b6","Belgrano Ath.":"#e76f51","Buenos Aires":"#457b9d","Los Matreros":"#6a0572","Atl. del Rosario":"#7b2d8b"}[eq]||"#334155");

  // Tracker stats
  const completed = tracker.filter(t=>t.resultado!==null);
  const aciertsL = completed.filter(t=>t.resultado==="L"&&t.probModelL>=t.probModelV).length;
  const aciertsV = completed.filter(t=>t.resultado==="V"&&t.probModelV>t.probModelL).length;
  const totalPreds = completed.length;
  const accuracy = totalPreds ? Math.round((aciertsL+aciertsV)/totalPreds*100) : null;
  const roiTeor = tracker.filter(t=>t.resultado!==null&&t.valueL!==null).reduce((s,t)=>{
    if(t.resultado==="L") return s + t.valueL;
    return s - 1;
  },0);

  return (
    <div>
      {/* Sub tabs */}
      <div style={{display:"flex",gap:0,marginBottom:16,borderBottom:"2px solid #e2e8f0"}}>
        {[["carga","📋 Carga de cuotas"],["tracker","📊 Tracker de predicciones"]].map(([k,l])=>(
          <button key={k} onClick={()=>setSubTab(k)}
            style={{padding:"10px 16px",border:"none",background:"transparent",cursor:"pointer",fontSize:13,
              color:subTab===k?"#0f3460":"#64748b",fontWeight:subTab===k?700:400,
              borderBottom:subTab===k?"2px solid #0f3460":"2px solid transparent",marginBottom:-2,fontFamily:"inherit"}}>
            {l}
          </button>
        ))}
  
      {saved&&<span style={{fontSize:11,color:"#16a34a",alignSelf:"center",background:"#f0fdf4",padding:"2px 8px",borderRadius:4}}>guardado</span>}
      </div>

      {/* CARGA DE CUOTAS */}
      {subTab==="carga"&&(
        <div>
          <div style={{background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:10,padding:"12px 16px",marginBottom:16,fontSize:13,color:"#0369a1"}}>
            <strong>Flujo:</strong> Cargás las cuotas de Stake el sábado antes de las 12:00 hs → bloqueás la fecha → el sistema registra la predicción del modelo y la cuota → después del partido cargás el resultado.
          </div>



          {/* Proximas fechas del fixture */}
          <div style={{marginBottom:16}}>
            <div style={{fontSize:12,fontWeight:700,color:"#64748b",letterSpacing:2,textTransform:"uppercase",marginBottom:8,borderLeft:"3px solid #0f3460",paddingLeft:10}}>
              Fechas pendientes — Fixture 2026
            </div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {Object.keys(FIXTURE_2026).map(Number).filter(f=>!fechasJugadas.includes(f)).sort((a,b)=>a-b).map(f=>(
                <button key={f}
                  onClick={()=>{
                    if(!cuotas[f]){
                      const newC={...cuotas};
                      newC[f]={};
                      FIXTURE_2026[f].partidos.forEach((p,i)=>{
                        newC[f]["26_f"+f+"_"+i]={local:p.local,visitante:p.visitante,stakeL:"",stakeV:"",stakeE:"",b365L:"",b365V:"",b365E:"",locked:false,resultado:null};
                      });
                      saveCuotas(newC);
                    }
                    toggleFecha(f);
                  }}
                  onDoubleClick={()=>setSelectedFecha(null)}
                  style={{padding:"6px 14px",borderRadius:6,
                    border:selectedFecha===f?"2px solid #0f3460":"1px solid #e2e8f0",
                    background:(()=>{
                      if(selectedFecha===f) return "#dbeafe";
                      if(cuotas[f]&&Object.values(cuotas[f]).some(p=>p.stakeL||p.b365L)) return "#f0fdf4";
                      return "#fff";
                    })(),
                    cursor:"pointer",fontSize:13,
                    color:(()=>{
                      if(selectedFecha===f) return "#1e40af";
                      if(cuotas[f]&&Object.values(cuotas[f]).some(p=>p.stakeL||p.b365L)) return "#16a34a";
                      return "#374151";
                    })(),
                    fontWeight:selectedFecha===f?700:400}}>
                  {cuotas[f]&&Object.values(cuotas[f]).some(p=>p.stakeL||p.b365L)?"✓ F":"+ F"}{f} · {FIXTURE_2026[f].d.slice(5).replace("-","/")}
                </button>
              ))}
            </div>
          </div>

          {/* Cuotas por fecha */}
          {Object.keys(cuotas).filter(f=>selectedFecha===null||+f===selectedFecha).sort((a,b)=>b-a).map(f=>{
            const fechaData = cuotas[f];
            const isLocked = Object.values(fechaData).every(p=>p.locked);
            return (
              <div key={f} style={{marginBottom:20}}>
                <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10,flexWrap:"wrap"}}>
                  <div style={{fontSize:12,fontWeight:700,color:"#64748b",letterSpacing:2,textTransform:"uppercase",borderLeft:"3px solid #0f3460",paddingLeft:10}}>
                    Fecha {f}
                  </div>

                  {!isLocked&&(
                    <button onClick={()=>lockFecha(+f)}
                      style={{padding:"4px 12px",borderRadius:6,border:"none",background:"#0f3460",color:"#fff",cursor:"pointer",fontSize:12,fontWeight:600}}>
                      🔒 Bloquear (antes de las 12:00)
                    </button>
                  )}
                  {isLocked&&editingFecha!==+f&&(
                    <span style={{fontSize:12,color:"#16a34a",fontWeight:600}}>🔒 Bloqueada</span>
                  )}
                  {isLocked&&(
                    <button onClick={()=>setEditingFecha(editingFecha===+f?null:+f)}
                      style={{padding:"4px 10px",borderRadius:6,border:"1px solid #e2e8f0",background:editingFecha===+f?"#fef3c7":"#fff",cursor:"pointer",fontSize:12,color:"#92400e"}}>
                      ✏️ {editingFecha===+f?"Cerrar edición":"Editar"}
                    </button>
                  )}
                  <button onClick={()=>exportarFecha(+f)}
                    style={{padding:"4px 10px",borderRadius:6,border:"1px solid #0f3460",background:"#0f3460",color:"#fff",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit",marginLeft:"auto"}}>
                    📋 Exportar
                  </button>
                </div>
                {Object.entries(fechaData).map(([id,p])=>{
                  const pred = getPredModel(p.local, p.visitante);
                  const sL=parseFloat(p.stakeL)||null, sV=parseFloat(p.stakeV)||null, sE=parseFloat(p.stakeE)||null;
                  const bL=parseFloat(p.b365L)||null, bV=parseFloat(p.b365V)||null, bE=parseFloat(p.b365E)||null;
                  const refL=sL||bL, refV=sV||bV, refE=sE||bE;
                  const impL=impliedProb(refL), impV=impliedProb(refV), impE=impliedProb(refE);
                  const valL=calcValue(pred.probL,refL), valV=calcValue(pred.probV,refV);
                  const overroundS=calcOverround(sL,sV,sE), overroundB=calcOverround(bL,bV,bE);
                  return (
                    <div key={id} style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
                      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                        <span style={{display:"inline-block",width:10,height:10,borderRadius:"50%",background:gc(p.local)}}/>
                        <strong style={{fontSize:14}}>{p.local}</strong>
                        <span style={{color:"#94a3b8",fontSize:12}}>vs</span>
                        <span style={{display:"inline-block",width:10,height:10,borderRadius:"50%",background:gc(p.visitante)}}/>
                        <strong style={{fontSize:14}}>{p.visitante}</strong>
                      </div>
                      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
                        {/* Local */}
                        <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px"}}>
                          <div style={{fontSize:11,color:"#64748b",marginBottom:6}}>Gana {p.local}</div>
                          <div style={{display:"flex",flexDirection:"column",gap:4,marginBottom:6}}>
                            <div style={{display:"flex",alignItems:"center",gap:6}}>
                              <span style={{fontSize:10,color:"#64748b",width:40}}>Stake</span>
                              {isLocked && editingFecha!==+f
                                ? <span style={{fontWeight:700,fontSize:13}}>{p.stakeL||"—"}</span>
                                : <input type="number" step="0.01" min="1" value={p.stakeL||""} placeholder="1.85"
                                    onChange={e=>updateCuota(+f,id,"stakeL",e.target.value)}
                                    style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#e2e8f0"),fontSize:12}}/>
                              }
                              {p.stakeL&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.stakeL))}%</span>}
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:6}}>
                              <span style={{fontSize:10,color:"#64748b",width:40}}>Bet365</span>
                              {isLocked && editingFecha!==+f
                                ? <span style={{fontWeight:700,fontSize:13}}>{p.b365L||"—"}</span>
                                : <input type="number" step="0.01" min="1" value={p.b365L||""} placeholder="1.85"
                                    onChange={e=>updateCuota(+f,id,"b365L",e.target.value)}
                                    style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#e2e8f0"),fontSize:12}}/>
                              }
                              {p.b365L&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.b365L))}%</span>}
                            </div>
                          </div>
                          <div style={{display:"flex",gap:10,fontSize:12,flexWrap:"wrap"}}>
                            <span>🤖 <strong>{pred.probL}%</strong></span>
                            {impL&&<span>📊 ref: <strong>{impL}%</strong></span>}
                          </div>
                          {valL!==null&&(
                            <div style={{marginTop:6,padding:"4px 8px",borderRadius:4,
                              background:valL>0?"#dcfce7":"#fee2e2",
                              color:valL>0?"#166534":"#991b1b",fontSize:12,fontWeight:700}}>
                              Value: {valL>0?"+":""}{valL} {valL>0?"✅":"❌"}
                            </div>
                          )}
                        </div>
                        {/* Visitante */}
                        <div style={{background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,padding:"10px 12px"}}>
                          <div style={{fontSize:11,color:"#64748b",marginBottom:6}}>Gana {p.visitante}</div>
                          <div style={{display:"flex",flexDirection:"column",gap:4,marginBottom:6}}>
                            <div style={{display:"flex",alignItems:"center",gap:6}}>
                              <span style={{fontSize:10,color:"#64748b",width:40}}>Stake</span>
                              {isLocked && editingFecha!==+f
                                ? <span style={{fontWeight:700,fontSize:13}}>{p.stakeV||"—"}</span>
                                : <input type="number" step="0.01" min="1" value={p.stakeV||""} placeholder="2.10"
                                    onChange={e=>updateCuota(+f,id,"stakeV",e.target.value)}
                                    style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#e2e8f0"),fontSize:12}}/>
                              }
                              {p.stakeV&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.stakeV))}%</span>}
                            </div>
                            <div style={{display:"flex",alignItems:"center",gap:6}}>
                              <span style={{fontSize:10,color:"#64748b",width:40}}>Bet365</span>
                              {isLocked && editingFecha!==+f
                                ? <span style={{fontWeight:700,fontSize:13}}>{p.b365V||"—"}</span>
                                : <input type="number" step="0.01" min="1" value={p.b365V||""} placeholder="2.10"
                                    onChange={e=>updateCuota(+f,id,"b365V",e.target.value)}
                                    style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#e2e8f0"),fontSize:12}}/>
                              }
                              {p.b365V&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.b365V))}%</span>}
                            </div>
                          </div>
                          <div style={{display:"flex",gap:10,fontSize:12,flexWrap:"wrap"}}>
                            <span>🤖 <strong>{pred.probV}%</strong></span>
                            {impV&&<span>📊 ref: <strong>{impV}%</strong></span>}
                          </div>
                          {valV!==null&&(
                            <div style={{marginTop:6,padding:"4px 8px",borderRadius:4,
                              background:valV>0?"#dcfce7":"#fee2e2",
                              color:valV>0?"#166534":"#991b1b",fontSize:12,fontWeight:700}}>
                              Value: {valV>0?"+":""}{valV} {valV>0?"✅":"❌"}
                            </div>
                          )}
                        </div>
                        {/* Empate */}
                        <div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:8,padding:"10px 12px"}}>
                          <div style={{fontSize:11,color:"#92400e",marginBottom:6}}>Empate</div>
                          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                            <span style={{fontSize:11,color:"#64748b"}}>Cuota Stake:</span>
                            <div style={{display:"flex",flexDirection:"column",gap:4}}>
                              <div style={{display:"flex",alignItems:"center",gap:6}}>
                                <span style={{fontSize:10,color:"#64748b",width:40}}>Stake</span>
                                {isLocked && editingFecha!==+f
                                  ? <span style={{fontWeight:700,fontSize:13}}>{p.stakeE||"—"}</span>
                                  : <input type="number" step="0.01" min="1" value={p.stakeE||""} placeholder="18.0"
                                      onChange={e=>updateCuota(+f,id,"stakeE",e.target.value)}
                                      style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#fde68a"),fontSize:12}}/>
                                }
                                {p.stakeE&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.stakeE))}%</span>}
                              </div>
                              <div style={{display:"flex",alignItems:"center",gap:6}}>
                                <span style={{fontSize:10,color:"#64748b",width:40}}>Bet365</span>
                                {isLocked && editingFecha!==+f
                                  ? <span style={{fontWeight:700,fontSize:13}}>{p.b365E||"—"}</span>
                                  : <input type="number" step="0.01" min="1" value={p.b365E||""} placeholder="18.0"
                                      onChange={e=>updateCuota(+f,id,"b365E",e.target.value)}
                                      style={{width:72,padding:"3px 5px",borderRadius:4,border:"1px solid "+(editingFecha===+f?"#f59e0b":"#fde68a"),fontSize:12}}/>
                                }
                                {p.b365E&&<span style={{fontSize:11,color:"#64748b"}}>{impliedProb(parseFloat(p.b365E))}%</span>}
                              </div>
                            </div>
                          </div>
                          <div style={{fontSize:11,color:"#64748b",marginTop:4,display:"flex",gap:10,flexWrap:"wrap"}}>
                            {overroundS!==null&&<span>Stake: <strong style={{color:overroundS>10?"#dc2626":overroundS>5?"#f59e0b":"#16a34a"}}>{overroundS>0?"+":""}{overroundS}%</strong></span>}
                            {overroundB!==null&&<span>Bet365: <strong style={{color:overroundB>10?"#dc2626":overroundB>5?"#f59e0b":"#16a34a"}}>{overroundB>0?"+":""}{overroundB}%</strong></span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          {Object.keys(cuotas).length===0&&(
            <div style={{color:"#94a3b8",fontSize:13,padding:"20px 0",textAlign:"center"}}>
              Todavía no hay cuotas cargadas. Usá los botones de arriba para empezar.
            </div>
          )}

          {/* Modal de exportación */}
          {exportModal&&(
            <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center"}}
              onClick={()=>setExportModal(null)}>
              <div style={{background:"#fff",borderRadius:12,padding:24,width:"90%",maxWidth:520,boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}
                onClick={e=>e.stopPropagation()}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
                  <span style={{fontWeight:700,fontSize:15,color:"#0f3460"}}>📋 Copiar para Claude</span>
                  <button onClick={()=>setExportModal(null)}
                    style={{border:"none",background:"#f1f5f9",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontSize:13,color:"#64748b"}}>
                    ✕ Cerrar
                  </button>
                </div>
                <textarea readOnly value={exportModal}
                  ref={el=>{if(el){el.focus();el.select();}}}
                  style={{width:"100%",height:220,fontSize:12,fontFamily:"monospace",border:"1px solid #e2e8f0",borderRadius:8,padding:10,resize:"none",color:"#0f172a",background:"#f8fafc",boxSizing:"border-box"}}
                  onFocus={e=>e.target.select()}
                  onClick={e=>e.target.select()}/>
                <div style={{display:"flex",gap:8,marginTop:10}}>
                  <button onClick={()=>setExportModal(null)}
                    style={{flex:1,padding:"8px 0",borderRadius:8,border:"none",background:"#0f3460",color:"#fff",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"inherit"}}>
                    ✓ Listo, ya está seleccionado — Cerrar
                  </button>
                </div>
                <div style={{fontSize:11,color:"#0369a1",textAlign:"center",marginTop:8,fontWeight:600}}>
                  El texto ya está seleccionado. Presioná Ctrl+C (o ⌘+C en Mac) para copiarlo.
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TRACKER */}
      {subTab==="tracker"&&(
        <div>
          {/* Export button */}
          <div style={{marginBottom:14,display:"flex",justifyContent:"flex-end",gap:8,alignItems:"center"}}>
            {saved&&<span style={{fontSize:11,color:"#16a34a",fontWeight:600}}>✓ Guardado</span>}
            <button onClick={()=>{
              // Exportar solo la última fecha con resultados cargados
              const fechasConRes = [...new Set(tracker.filter(t=>t.resultado).map(t=>t.fecha))];
              const ultimaFecha = fechasConRes.length ? Math.max(...fechasConRes) : null;
              const lines = ultimaFecha ? ["=== FECHA "+ultimaFecha+" ==="] : ["Sin resultados cargados"];
              if(ultimaFecha) {
                tracker.filter(t=>t.fecha===ultimaFecha&&t.resultado).forEach(t=>{
                  const ok=(t.resultado==="L"&&t.probModelL>=t.probModelV)||(t.resultado==="V"&&t.probModelV>t.probModelL);
                  lines.push((ok?"✓ ":"✗ ")+t.local+" vs "+t.visitante+" → "+(t.resultado==="L"?"Ganó "+t.local:t.resultado==="V"?"Ganó "+t.visitante:"Empate"));
                });
                const total=tracker.filter(t=>t.fecha===ultimaFecha&&t.resultado).length;
                const aciertos=tracker.filter(t=>t.fecha===ultimaFecha&&t.resultado&&((t.resultado==="L"&&t.probModelL>=t.probModelV)||(t.resultado==="V"&&t.probModelV>t.probModelL))).length;
                lines.push("Resultado: "+aciertos+"/"+total+" ("+Math.round(aciertos/total*100)+"%)");
              }
              const text=lines.join("\n");
              const ta=document.createElement("textarea");
              ta.value=text; ta.style.cssText="position:fixed;top:0;left:0;width:100%;height:220px;z-index:9999;font-size:12px;padding:10px;font-family:monospace";
              document.body.appendChild(ta); ta.focus(); ta.select();
              const btn=document.createElement("button");
              btn.textContent="✕ Cerrar";
              btn.style.cssText="position:fixed;top:225px;left:10px;z-index:9999;padding:8px 16px;cursor:pointer;background:#0f3460;color:#fff;border:none;border-radius:6px;font-size:13px";
              btn.onclick=()=>{document.body.removeChild(ta);document.body.removeChild(btn);};
              document.body.appendChild(btn);
            }}
              style={{padding:"6px 14px",borderRadius:6,border:"1px solid #0f3460",background:"#0f3460",
                color:"#fff",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit"}}>
              📋 Exportar para Claude
            </button>
          </div>
          {/* Stats globales */}
          {completed.length>0&&(
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:20}}>
              <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 18px"}}>
                <div style={{fontSize:11,color:"#64748b",marginBottom:4}}>Precisión del modelo</div>
                <div style={{fontSize:32,fontWeight:800,color:accuracy>=60?"#16a34a":accuracy>=50?"#f59e0b":"#dc2626"}}>{accuracy}%</div>
                <div style={{fontSize:11,color:"#94a3b8"}}>{aciertsL+aciertsV}/{totalPreds} aciertos</div>
              </div>
              <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 18px"}}>
                <div style={{fontSize:11,color:"#64748b",marginBottom:4}}>Partidos evaluados</div>
                <div style={{fontSize:32,fontWeight:800,color:"#0f3460"}}>{totalPreds}</div>
                <div style={{fontSize:11,color:"#94a3b8"}}>{tracker.filter(t=>!t.resultado).length} pendientes</div>
              </div>
              <div style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 18px"}}>
                <div style={{fontSize:11,color:"#64748b",marginBottom:4}}>Value acum. teórico</div>
                <div style={{fontSize:32,fontWeight:800,color:roiTeor>=0?"#16a34a":"#dc2626"}}>{roiTeor>=0?"+":""}{Math.round(roiTeor*100)/100}</div>
                <div style={{fontSize:11,color:"#94a3b8"}}>por unidad apostada</div>
              </div>
            </div>
          )}

          {tracker.length===0&&(
            <div style={{color:"#94a3b8",fontSize:13,padding:"20px 0",textAlign:"center"}}>
              Todavía no hay predicciones registradas. Bloqueá una fecha en "Carga de cuotas" para empezar el tracking.
            </div>
          )}

          {/* Partidos por fecha */}
          {[...new Set(tracker.map(t=>t.fecha))].sort((a,b)=>b-a).map(f=>(
            <div key={f} style={{marginBottom:20}}>
              <div style={{fontSize:12,fontWeight:700,color:"#64748b",letterSpacing:2,textTransform:"uppercase",marginBottom:10,borderLeft:"3px solid #0f3460",paddingLeft:10}}>
                Fecha {f}
              </div>
              {tracker.filter(t=>t.fecha===f).map(t=>{
                const diffL = t.probModelL - (t.probMktL||t.probModelL);
                const diffV = t.probModelV - (t.probMktV||t.probModelV);
                return (
                  <div key={t.id} style={{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"12px 14px",marginBottom:8}}>
                    <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                      <span style={{display:"inline-block",width:10,height:10,borderRadius:"50%",background:gc(t.local)}}/>
                      <strong style={{fontSize:14}}>{t.local}</strong>
                      <span style={{color:"#94a3b8"}}>vs</span>
                      <span style={{display:"inline-block",width:10,height:10,borderRadius:"50%",background:gc(t.visitante)}}/>
                      <strong style={{fontSize:14}}>{t.visitante}</strong>
                      {t.resultado&&(
                        <span style={{marginLeft:"auto",fontSize:12,fontWeight:700,padding:"3px 10px",borderRadius:6,
                          background:t.resultado==="L"?(t.probModelL>=t.probModelV?"#dcfce7":"#fee2e2"):(t.probModelV>t.probModelL?"#dcfce7":"#fee2e2"),
                          color:t.resultado==="L"?(t.probModelL>=t.probModelV?"#166534":"#991b1b"):(t.probModelV>t.probModelL?"#166534":"#991b1b")}}>
                          {t.resultado==="L"?"Ganó "+t.local:"Ganó "+t.visitante} {t.resultado==="L"?(t.probModelL>=t.probModelV?"✅":"❌"):(t.probModelV>t.probModelL?"✅":"❌")}
                        </span>
                      )}
                    </div>
                    {/* Comparacion modelo vs mercado */}
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:8,fontSize:12}}>
                      <div style={{background:"#fff",borderRadius:6,padding:"8px 10px",border:"1px solid #e2e8f0"}}>
                        <div style={{color:"#64748b",marginBottom:4}}>Gana {t.local}</div>
                        <div style={{display:"flex",gap:12}}>
                          <span>🤖 <strong>{t.probModelL}%</strong></span>
                          {t.probMktL&&<span>📊 <strong>{t.probMktL}%</strong></span>}
                          {t.probMktL&&<span style={{color:diffL>0?"#16a34a":diffL<0?"#dc2626":"#94a3b8",fontWeight:600}}>
                            {diffL>0?"+":""}{diffL}%
                          </span>}
                        </div>
                        {t.valueL!==null&&<div style={{marginTop:4,fontSize:11,color:t.valueL>0?"#16a34a":"#dc2626",fontWeight:600}}>
                          Value: {t.valueL>0?"+":""}{t.valueL}
                        </div>}
                      </div>
                      <div style={{background:"#fff",borderRadius:6,padding:"8px 10px",border:"1px solid #e2e8f0"}}>
                        <div style={{color:"#64748b",marginBottom:4}}>Gana {t.visitante}</div>
                        <div style={{display:"flex",gap:12}}>
                          <span>🤖 <strong>{t.probModelV}%</strong></span>
                          {t.probMktV&&<span>📊 <strong>{t.probMktV}%</strong></span>}
                          {t.probMktV&&<span style={{color:diffV>0?"#16a34a":diffV<0?"#dc2626":"#94a3b8",fontWeight:600}}>
                            {diffV>0?"+":""}{diffV}%
                          </span>}
                        </div>
                        {t.valueV!==null&&<div style={{marginTop:4,fontSize:11,color:t.valueV>0?"#16a34a":"#dc2626",fontWeight:600}}>
                          Value: {t.valueV>0?"+":""}{t.valueV}
                        </div>}
                      </div>
                      {t.cuotaE&&<div style={{background:"#fffbeb",borderRadius:6,padding:"8px 10px",border:"1px solid #fde68a",gridColumn:"span 2"}}>
                        <div style={{color:"#92400e",marginBottom:2,fontSize:11}}>Empate · cuota {t.cuotaE} · prob. implícita {t.probMktE}%
                          {t.overround&&<span style={{marginLeft:8,color:"#64748b"}}>Margen book: {t.overround>0?"+":""}{t.overround}%</span>}
                        </div>
                      </div>}
                    </div>
                    {/* Resultado */}
                    {!t.resultado&&(
                      <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                        <span style={{fontSize:12,color:"#64748b"}}>Resultado:</span>
                        <button onClick={()=>setResultado(t.id,"L")}
                          style={{padding:"4px 12px",borderRadius:6,border:"1px solid #e2e8f0",background:"#fff",cursor:"pointer",fontSize:12}}>
                          Ganó {t.local}
                        </button>
                        <button onClick={()=>setResultado(t.id,"V")}
                          style={{padding:"4px 12px",borderRadius:6,border:"1px solid #e2e8f0",background:"#fff",cursor:"pointer",fontSize:12}}>
                          Ganó {t.visitante}
                        </button>
                        <button onClick={()=>setResultado(t.id,"E")}
                          style={{padding:"4px 12px",borderRadius:6,border:"1px solid #fde68a",background:"#fffbeb",cursor:"pointer",fontSize:12,color:"#92400e"}}>
                          Empate
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [partidos,setPartidos]=useState(D);
  const [tab,setTab]=useState("Resultados");
  const [ft,setFt]=useState(2026);
  const [saved,setSaved]=useState(false);

  useEffect(()=>{(async()=>{
    // Try current key first, then fallback to older versions
    const keys=["urba_v21","urba_v20","urba_v19","urba_v18","urba_v17","urba_v16","urba_v15","urba_v14","urba_v13","urba_v12","urba_v11","urba_v10","urba_v9","urba_v8","urba_v7"];
    for(const k of keys){
      try{const r=await window.storage.get(k);if(r&&r.value){const d=JSON.parse(r.value);if(d.length>D.length){setPartidos(d);break;}}}catch(e){}
    }
  })();},[]);
  useEffect(()=>{(async()=>{try{await window.storage.set("urba_v21",JSON.stringify(partidos));setSaved(true);setTimeout(()=>setSaved(false),1500);}catch(e){}})();},[partidos]);

  const temps=useMemo(()=>[...new Set(partidos.map(p=>p.t))].sort((a,b)=>b-a),[partidos]);
  const equipos=useMemo(()=>[...new Set(partidos.flatMap(p=>[p.local,p.visitante]))].sort(),[partidos]);
  const pFilt=useMemo(()=>partidos.filter(p=>p.t===ft),[partidos,ft]);
  const tabla=useMemo(()=>calcTabla(pFilt),[pFilt]);
  const elos=useMemo(()=>calcELO(partidos),[partidos]);
  const homeStats=useMemo(()=>calcHomeStats(partidos),[partidos]);
  const locStats=useMemo(()=>{
    let lG=0,lPJ=0,lPF=0,vG=0,vPJ=0,vPF=0;
    pFilt.forEach(p=>{lPJ++;lPF+=p.pL;if(p.pL>p.pV)lG++;vPJ++;vPF+=p.pV;if(p.pV>p.pL)vG++;});
    return{local:{PJ:lPJ,PG:lG,avg:lPJ?(lPF/lPJ).toFixed(1):0,pct:lPJ?Math.round(100*lG/lPJ):0},visit:{PJ:vPJ,PG:vG,avg:vPJ?(vPF/vPJ).toFixed(1):0,pct:vPJ?Math.round(100*vG/vPJ):0}};
  },[pFilt]);

  return (
    <div style={S.root}>
      <div style={S.hdr}>
        <div style={S.hi}>
          <div>
            <div style={S.htag}>URBA · Copa Macro</div>
            <h1 style={S.htit}>Top 14</h1>
            <div style={S.hsub}>Análisis · Localía · H2H · Predicciones</div>
          </div>
          <div style={S.hst}>
            {[{n:partidos.length,l:"Partidos"},{n:temps.length,l:"Temporadas"},{n:equipos.length,l:"Equipos"}].map(x=>(
              <div key={x.l} style={S.hsi}><span style={S.hsn}>{x.n}</span><span style={S.hsl}>{x.l}</span></div>
            ))}
          </div>
        </div>
      </div>
      <div style={S.tbar}>
        {["Resultados","Tabla","Localía","H2H","Predictor","Cuotas","Formaciones"].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={Object.assign({},S.tbtn,tab===t?S.ton:{})}>{t}</button>
        ))}
        <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:8}}>
          {saved&&<span style={S.svd}>guardado</span>}
          <select value={ft} onChange={e=>setFt(+e.target.value)} style={S.sel}>
            {temps.map(t=><option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div style={S.body}>
        {tab==="Resultados"&&<TabResultados pFilt={pFilt}/>}
        {tab==="Tabla"&&<TabTabla tabla={tabla} pFilt={pFilt} equipos={equipos} arr={partidos}/>}
        {tab==="Localía"&&<TabLocalia locStats={locStats} tabla={tabla} pFilt={pFilt} elos={elos} homeStats={homeStats}/>}
        {tab==="H2H"&&<TabH2H arr={partidos} equipos={equipos}/>}
        {tab==="Predictor"&&<TabPredictor arr={partidos} equipos={equipos} elos={elos} homeStats={homeStats}/>}
        {tab==="Cuotas"&&<TabCuotas arr={partidos} equipos={equipos} elos={elos}/>}
        {tab==="Formaciones"&&<TabFormaciones/>}
      </div>
    </div>
  );
}

const S={
  root:{fontFamily:"Georgia,serif",maxWidth:860,margin:"0 auto",background:"#fff",minHeight:"100vh"},
  hdr:{background:"#0f2027",padding:"28px 24px 20px"},
  hi:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},
  htag:{color:"#a3c4f3",fontSize:11,letterSpacing:3,textTransform:"uppercase",marginBottom:4},
  htit:{color:"#fff",fontSize:36,fontWeight:700,margin:0,letterSpacing:-1},
  hsub:{color:"#8ca7c4",fontSize:13,marginTop:4},
  hst:{display:"flex",gap:24},hsi:{display:"flex",flexDirection:"column",alignItems:"center"},
  hsn:{color:"#fff",fontSize:24,fontWeight:700,lineHeight:1},hsl:{color:"#8ca7c4",fontSize:11},
  tbar:{display:"flex",alignItems:"center",background:"#f8fafc",borderBottom:"2px solid #e2e8f0",padding:"0 14px"},
  tbtn:{padding:"12px 10px",border:"none",background:"transparent",cursor:"pointer",fontSize:13,color:"#64748b",fontFamily:"inherit",borderBottom:"2px solid transparent",marginBottom:-2},
  ton:{color:"#0f3460",fontWeight:700,borderBottomColor:"#0f3460"},
  svd:{fontSize:11,color:"#16a34a",background:"#f0fdf4",padding:"2px 8px",borderRadius:4},
  sel:{fontSize:12,padding:"4px 8px",borderRadius:6,border:"1px solid #e2e8f0",background:"#fff"},
  sellg:{fontSize:14,padding:"8px 12px",borderRadius:8,border:"1px solid #e2e8f0",background:"#fff",width:"100%"},
  slbl:{fontSize:11,color:"#64748b",marginBottom:4},
  body:{padding:"18px"},
  secTitle:{fontWeight:700,fontSize:12,color:"#64748b",letterSpacing:2,textTransform:"uppercase",margin:"20px 0 10px",borderLeft:"3px solid #0f3460",paddingLeft:10},
  grid2:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(255px,1fr))",gap:7},
  card:{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:10,padding:"10px 12px",display:"flex",alignItems:"center",gap:7},
  mt:{flex:1,display:"flex",alignItems:"center",gap:5},
  ms:{fontSize:17,fontWeight:700,color:"#0f3460",minWidth:26,textAlign:"center"},
  tbl:{width:"100%",borderCollapse:"collapse",fontSize:13},
  th:{color:"#fff",padding:"10px 7px",textAlign:"center",fontWeight:600,fontSize:12},
  tr:{borderBottom:"1px solid #f1f5f9"},
  td:{padding:"9px 7px",textAlign:"center",color:"#374151"},
  kpi:{background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:12,padding:"14px 18px"},
  kpiL:{fontSize:12,color:"#64748b",marginBottom:4},
  kpiV:{fontSize:36,fontWeight:800,lineHeight:1,marginBottom:8},
  kpiSb:{fontSize:12,color:"#94a3b8",marginTop:6},
};
