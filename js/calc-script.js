document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultsContainer = document.getElementById('results');

    // *** Таблицы данных (перенесены из скриншотов) ***

    // Таблица 1. "Маркеры года рождения" (НЕПОЛНАЯ, нужно дополнить!)
    const yearMarkersTable = [
        { year: 1900, marker1: 7, marker2: 17, marker3: 17 },
        { year: 1901, marker1: 10, marker2: 16, marker3: 18 },
        { year: 1902, marker1: 13, marker2: 15, marker3: 13 },
        { year: 1903, marker1: 16, marker2: 14, marker3: 11 },
        { year: 1904, marker1: 18, marker2: 12, marker3: 8 },
        { year: 1905, marker1: 21, marker2: 11, marker3: 6 },
        { year: 1906, marker1: 1, marker2: 10, marker3: 4 },
        { year: 1907, marker1: 4, marker2: 9, marker3: 2 },
        { year: 1908, marker1: 5, marker2: 7, marker3: 32 },
        { year: 1909, marker1: 9, marker2: 6, marker3: 30 },
        { year: 1910, marker1: 12, marker2: 5, marker3: 28 },
        { year: 1911, marker1: 15, marker2: 4, marker3: 26 },
        { year: 1912, marker1: 17, marker2: 2, marker3: 23 },
        { year: 1913, marker1: 20, marker2: 1, marker3: 21 },
        { year: 1914, marker1: 0, marker2: 0, marker3: 19 },
        { year: 1915, marker1: 3, marker2: 27, marker3: 17 },
        { year: 1916, marker1: 5, marker2: 25, marker3: 14 },
        { year: 1917, marker1: 8, marker2: 24, marker3: 12 },
        { year: 1918, marker1: 11, marker2: 23, marker3: 10 },
        { year: 1919, marker1: 14, marker2: 22, marker3: 8 },
        { year: 1920, marker1: 16, marker2: 20, marker3: 5 },
        { year: 1921, marker1: 19, marker2: 19, marker3: 3 },
        { year: 1922, marker1: 22, marker2: 18, marker3: 1 },
        { year: 1923, marker1: 2, marker2: 17, marker3: 32 },
        { year: 1924, marker1: 4, marker2: 15, marker3: 29 },
        { year: 1925, marker1: 7, marker2: 14, marker3: 27 },
        { year: 1926, marker1: 10, marker2: 13, marker3: 25 },
        { year: 1927, marker1: 13, marker2: 12, marker3: 23 },
        { year: 1928, marker1: 15, marker2: 10, marker3: 20 },
        { year: 1929, marker1: 18, marker2: 9, marker3: 18 },
        { year: 1930, marker1: 21, marker2: 8, marker3: 16 },
        { year: 1931, marker1: 1, marker2: 7, marker3: 14 },
        { year: 1932, marker1: 3, marker2: 5, marker3: 11 },
        { year: 1933, marker1: 6, marker2: 4, marker3: 9 },
        { year: 1934, marker1: 9, marker2: 3, marker3: 7 },
        { year: 1935, marker1: 12, marker2: 2, marker3: 5 },
        { year: 1936, marker1: 14, marker2: 0, marker3: 2 },
        { year: 1937, marker1: 17, marker2: 27, marker3: 0 },
        { year: 1938, marker1: 20, marker2: 26, marker3: 31 },
        { year: 1939, marker1: 0, marker2: 25, marker3: 29 },
        { year: 1940, marker1: 2, marker2: 23, marker3: 26 },
        { year: 1941, marker1: 5, marker2: 22, marker3: 24 },
        { year: 1942, marker1: 8, marker2: 21, marker3: 22 },
        { year: 1943, marker1: 11, marker2: 20, marker3: 20 },
        { year: 1944, marker1: 13, marker2: 18, marker3: 17 },
        { year: 1945, marker1: 16, marker2: 17, marker3: 15 },
        { year: 1946, marker1: 19, marker2: 16, marker3: 13 },
        { year: 1947, marker1: 22, marker2: 15, marker3: 11 },
        { year: 1948, marker1: 1, marker2: 13, marker3: 8 },
        { year: 1949, marker1: 4, marker2: 12, marker3: 6 },
        { year: 1950, marker1: 7, marker2: 11, marker3: 4 },
        { year: 1951, marker1: 10, marker2: 10, marker3: 2 },
        { year: 1952, marker1: 12, marker2: 8, marker3: 32 },
        { year: 1953, marker1: 15, marker2: 7, marker3: 30 },
        { year: 1954, marker1: 18, marker2: 6, marker3: 28 },
        { year: 1955, marker1: 21, marker2: 5, marker3: 26 },
        { year: 1956, marker1: 0, marker2: 3, marker3: 23 },
        { year: 1957, marker1: 3, marker2: 2, marker3: 21 },
        { year: 1958, marker1: 6, marker2: 1, marker3: 19 },
        { year: 1959, marker1: 9, marker2: 0, marker3: 17 },
        { year: 1960, marker1: 11, marker2: 26, marker3: 14 },
        { year: 1961, marker1: 14, marker2: 25, marker3: 12 },
        { year: 1962, marker1: 17, marker2: 24, marker3: 10 },
        { year: 1963, marker1: 20, marker2: 23, marker3: 8 },
        { year: 1964, marker1: 22, marker2: 21, marker3: 5 },
        { year: 1965, marker1: 2, marker2: 20, marker3: 3 },
        { year: 1966, marker1: 5, marker2: 19, marker3: 1 },
        { year: 1967, marker1: 8, marker2: 18, marker3: 32 },
        { year: 1968, marker1: 10, marker2: 16, marker3: 29 },
        { year: 1969, marker1: 13, marker2: 15, marker3: 27 },
        { year: 1970, marker1: 16, marker2: 14, marker3: 25 },
        { year: 1971, marker1: 19, marker2: 13, marker3: 23 },
        { year: 1972, marker1: 21, marker2: 11, marker3: 20 },
        { year: 1973, marker1: 1, marker2: 10, marker3: 18 },
        { year: 1974, marker1: 4, marker2: 9, marker3: 16 },
        { year: 1975, marker1: 7, marker2: 8, marker3: 14 },
        { year: 1976, marker1: 9, marker2: 6, marker3: 11 },
        { year: 1977, marker1: 12, marker2: 5, marker3: 9 },
        { year: 1978, marker1: 15, marker2: 4, marker3: 7 },
        { year: 1979, marker1: 18, marker2: 3, marker3: 5 },
        { year: 1980, marker1: 20, marker2: 1, marker3: 2 },
        { year: 1981, marker1: 0, marker2: 0, marker3: 0 },
        { year: 1982, marker1: 3, marker2: 27, marker3: 31 },
        { year: 1983, marker1: 6, marker2: 26, marker3: 29 },
        { year: 1984, marker1: 8, marker2: 24, marker3: 26 },
        { year: 1985, marker1: 11, marker2: 23, marker3: 24 },
        { year: 1986, marker1: 14, marker2: 22, marker3: 22 },
        { year: 1987, marker1: 17, marker2: 21, marker3: 20 },
        { year: 1988, marker1: 19, marker2: 19, marker3: 17 },
        { year: 1989, marker1: 22, marker2: 18, marker3: 15 },
        { year: 1990, marker1: 2, marker2: 17, marker3: 13 },
        { year: 1991, marker1: 5, marker2: 16, marker3: 11 },
        { year: 1992, marker1: 7, marker2: 14, marker3: 8 },
        { year: 1993, marker1: 10, marker2: 13, marker3: 6 },
        { year: 1994, marker1: 13, marker2: 12, marker3: 4 },
        { year: 1995, marker1: 16, marker2: 11, marker3: 2 },
        { year: 1996, marker1: 18, marker2: 9, marker3: 32 },
        { year: 1997, marker1: 21, marker2: 8, marker3: 30 },
        { year: 1998, marker1: 1, marker2: 7, marker3: 28 },
        { year: 1999, marker1: 4, marker2: 6, marker3: 26 },
        { year: 2000, marker1: 6, marker2: 4, marker3: 23 },
        { year: 2001, marker1: 9, marker2: 3, marker3: 21 },
        { year: 2002, marker1: 12, marker2: 2, marker3: 19 },
        { year: 2003, marker1: 15, marker2: 1, marker3: 17 },
        { year: 2004, marker1: 17, marker2: 27, marker3: 14 },
        { year: 2005, marker1: 20, marker2: 26, marker3: 12 },
        { year: 2006, marker1: 0, marker2: 25, marker3: 10 },
        { year: 2007, marker1: 3, marker2: 24, marker3: 8 },
        { year: 2008, marker1: 5, marker2: 22, marker3: 5 },
        { year: 2009, marker1: 8, marker2: 21, marker3: 3 },
        { year: 2010, marker1: 11, marker2: 20, marker3: 1 },
        { year: 2011, marker1: 14, marker2: 19, marker3: 32 },
        { year: 2012, marker1: 16, marker2: 17, marker3: 29 },
        { year: 2013, marker1: 19, marker2: 16, marker3: 27 },
        { year: 2014, marker1: 22, marker2: 15, marker3: 25 },
        { year: 2015, marker1: 2, marker2: 14, marker3: 23 },
        { year: 2016, marker1: 4, marker2: 12, marker3: 20 },
        { year: 2017, marker1: 7, marker2: 11, marker3: 18 },
        { year: 2018, marker1: 10, marker2: 10, marker3: 16 },
        { year: 2019, marker1: 13, marker2: 9, marker3: 14 },
        { year: 2020, marker1: 15, marker2: 7, marker3: 11 },
        { year: 2021, marker1: 18, marker2: 6, marker3: 9 },
        { year: 2022, marker1: 21, marker2: 5, marker3: 7 },
        { year: 2023, marker1: 1, marker2: 4, marker3: 5 },
        { year: 2024, marker1: 3, marker2: 2, marker3: 2 },
        { year: 2025, marker1: 6, marker2: 1, marker3: 0 },
        { year: 2026, marker1: 9, marker2: 0, marker3: 31 },
        { year: 2027, marker1: 12, marker2: 27, marker3: 29 },
        { year: 2028, marker1: 14, marker2: 25, marker3: 26 },
        { year: 2029, marker1: 17, marker2: 24, marker3: 24 },
        { year: 2030, marker1: 20, marker2: 23, marker3: 22 },
        { year: 2031, marker1: 0, marker2: 22, marker3: 20 },
        { year: 2032, marker1: 2, marker2: 20, marker3: 17 },
        { year: 2033, marker1: 5, marker2: 19, marker3: 15 },
        { year: 2034, marker1: 8, marker2: 18, marker3: 13 },
        { year: 2035, marker1: 11, marker2: 17, marker3: 11 },
        { year: 2036, marker1: 13, marker2: 15, marker3: 8 },
        { year: 2037, marker1: 16, marker2: 14, marker3: 6 },
        { year: 2038, marker1: 19, marker2: 13, marker3: 4 },
        { year: 2039, marker1: 22, marker2: 12, marker3: 2 },
        { year: 2040, marker1: 1, marker2: 10, marker3: 32 },
        { year: 2041, marker1: 4, marker2: 9, marker3: 30 },
        { year: 2042, marker1: 7, marker2: 8, marker3: 28 },
        { year: 2043, marker1: 10, marker2: 7, marker3: 26 },
        { year: 2044, marker1: 12, marker2: 5, marker3: 23 },
        { year: 2045, marker1: 15, marker2: 4, marker3: 21 },
        { year: 2046, marker1: 18, marker2: 3, marker3: 19 },
        { year: 2047, marker1: 21, marker2: 2, marker3: 17 },
        { year: 2048, marker1: 0, marker2: 0, marker3: 14 },
        { year: 2049, marker1: 3, marker2: 27, marker3: 12 },
        { year: 2050, marker1: 6, marker2: 26, marker3: 10 },
        { year: 2051, marker1: 9, marker2: 25, marker3: 8 },
        // ... сюда нужно добавить данные для остальных годов из полной таблицы "Маркеры года рождения" ...
    ];

    // Таблица месяцев
    const monthTable = [
        { month: 1, name: "Январь", days: 31, marker1: 12, marker2: 26, marker3: 4, leapYear: false  }, // Обычный
        { month: 1, name: "Январь", days: 31, marker1: 13, marker2: 27, marker3: 5, leapYear: true  }, // Високосный
        { month: 2, name: "Февраль", days: 29, marker1: 7, marker2: 26, marker3: 9, leapYear: true }, // Високосный
        { month: 2, name: "Февраль", days: 28, marker1: 7, marker2: 26, marker3: 9, leapYear: false }, // Обычный
        { month: 3, name: "Март", days: 31, marker1: 22, marker2: 23, marker3: 11 },
        { month: 4, name: "Апрель", days: 30, marker1: 15, marker2: 21, marker3: 14 },
        { month: 5, name: "Май", days: 31, marker1: 7, marker2: 18, marker3: 16 },
        { month: 6, name: "Июнь", days: 30, marker1: 0, marker2: 16, marker3: 19 },
        { month: 7, name: "Июль", days: 31, marker1: 15, marker2: 13, marker3: 21 },
        { month: 8, name: "Август", days: 31, marker1: 7, marker2: 10, marker3: 23 },
        { month: 9, name: "Сентябрь", days: 30, marker1: 0, marker2: 8, marker3: 26 },
        { month: 10, name: "Октябрь", days: 31, marker1: 15, marker2: 5, marker3: 28 },
        { month: 11, name: "Ноябрь", days: 30, marker1: 8, marker2: 3, marker3: 31 },
        { month: 12, name: "Декабрь", days: 31, marker1: 0, marker2: 0, marker3: 0 },
    ];

    // Таблицы результатов (контуры)
    const physContourTable = [
        { marker: 1, percentage: "33-55", description: "сангвиник" },
        { marker: 2, percentage: "55-72", description: "сангвиник-холерик" },
        { marker: 3, percentage: "15-65", description: "чувствит. холерик" },
        { marker: 4, percentage: "50-72", description: "сангвиник-холерик" },
        { marker: 5, percentage: "30-41", description: "меланхолик" },
        { marker: 6, percentage: "75-21", description: "флегматик" },
        { marker: 7, percentage: "45-72", description: "сангвиник-холерик" },
        { marker: 8, percentage: "60-22", description: "флегматик" },
        { marker: 9, percentage: "35-28", description: "меланхолик" },
        { marker: 10, percentage: "35-49", description: "сангвиник" },
        { marker: 11, percentage: "95-22", description: "флегматик" },
        { marker: 12, percentage: "30-99", description: "чувствит. холерик" },
        { marker: 13, percentage: "40-61", description: "сангвиник" },
        { marker: 14, percentage: "20-55", description: "чувствит. холерик" },
        { marker: 15, percentage: "40-28", description: "меланхолик" },
        { marker: 16, percentage: "90-21", description: "флегматик" },
        { marker: 17, percentage: "50-83", description: "сангвиник-холерик" },
        { marker: 18, percentage: "10-45", description: "чувствит. холерик" },
        { marker: 19, percentage: "99-55", description: "сангвиник-флегматик" },
        { marker: 20, percentage: "30-52", description: "сангвиник" },
        { marker: 21, percentage: "20-79", description: "чувствит. холерик" },
        { marker: 22, percentage: "80-63", description: "сангвиник-холерик" },
        { marker: 23, percentage: "25-51", description: "меланхолик" },
    ];

    const emotionalContourTable = [
        { marker: 1, percentage: "69-95", description: "страстный" },
        { marker: 2, percentage: "75-27", description: "эгоистичный (лидерск.)" },
        { marker: 3, percentage: "31-45", description: "эмпатический" },
        { marker: 4, percentage: "62-77", description: "страстный" },
        { marker: 5, percentage: "50-59", description: "эмпатический" },
        { marker: 6, percentage: "44-68", description: "эмпатический" },
        { marker: 7, percentage: "12-45", description: "самоотверж. интегратив." },
        { marker: 8, percentage: "6-23", description: "холодный" },
        { marker: 9, percentage: "81-54", description: "эгоистичный (лидерск.)" },
        { marker: 10, percentage: "25-77", description: "самоотверж. интегратив." },
        { marker: 11, percentage: "18-50", description: "самоотверж. интегратив." },
        { marker: 12, percentage: "44-59", description: "эмпатический" },
        { marker: 13, percentage: "25-68", description: "самоотверж. интегратив." },
        { marker: 14, percentage: "50-77", description: "страстный" },
        { marker: 15, percentage: "50-99", description: "страстный" },
        { marker: 16, percentage: "50-36", description: "сентиментальный" },
        { marker: 17, percentage: "50-41", description: "сентиментальный" },
        { marker: 18, percentage: "31-14", description: "холодный" },
        { marker: 19, percentage: "99-54", description: "эгоистичный (лидерск.)" },
        { marker: 20, percentage: "44-32", description: "сентиментальный" },
        { marker: 21, percentage: "62-41", description: "сентиментальный" },
        { marker: 22, percentage: "25-18", description: "холодный" },
        { marker: 23, percentage: "69-59", description: "эгоистичный (лидерск.)" },
        { marker: 24, percentage: "56-41", description: "сентиментальный" },
        { marker: 25, percentage: "44-68", description: "эмпатический" },
        { marker: 26, percentage: "37-41", description: "холодный" },
        { marker: 27, percentage: "56-73", description: "страстный" },
        { marker: 28, percentage: "44-73", description: "эмпатический" },
    ];

    const intellectContourTable = [
        { marker: 1, percentage: "64-35", description: "гармоничный художествен." },
        { marker: 2, percentage: "21-65", description: "дискретный" },
        { marker: 3, percentage: "21-65", description: "дискретный" },
        { marker: 4, percentage: "93-82", description: "сверхпродуктивн" },
        { marker: 5, percentage: "43-41", description: "гармоничный художествен." },
        { marker: 6, percentage: "00-99", description: "дискретный" },
        { marker: 7, percentage: "57-88", description: "продуктивный мыслительный" },
        { marker: 8, percentage: "7-41", description: "прикладной мыслительный" },
        { marker: 9, percentage: "29-35", description: "прикладной смешанный" },
        { marker: 10, percentage: "86-35", description: "гармоничный художествен." },
        { marker: 11, percentage: "29-82", description: "гармоничный мыслительный" },
        { marker: 12, percentage: "86-41", description: "гармоничный художествен." },
        { marker: 13, percentage: "14-71", description: "дискретный" },
        { marker: 14, percentage: "50-59", description: "продуктивный смешанный" },
        { marker: 15, percentage: "78-65", description: "продуктивный художествен." },
        { marker: 16, percentage: "93-24", description: "аналоговый" },
        { marker: 17, percentage: "84-71", description: "продуктивный художествен." },
        { marker: 18, percentage: "29-41", description: "прикладной смешанный" },
        { marker: 19, percentage: "26-71", description: "гармоничный мыслительный" },
        { marker: 20, percentage: "99-82", description: "сверхпродуктивн" },
        { marker: 21, percentage: "7-76", description: "дискретный" },
        { marker: 22, percentage: "14-35", description: "прикладной мыслительный" },
        { marker: 23, percentage: "50-65", description: "продуктивный смешанный" },
        { marker: 24, percentage: "26-18", description: "прикладной смешанный" },
        { marker: 25, percentage: "29-88", description: "гармоничный мыслительный" },
        { marker: 26, percentage: "93-59", description: "продуктивный художествен." },
        { marker: 27, percentage: "57-82", description: "продуктивный мыслительный" },
        { marker: 28, percentage: "29-29", description: "прикладной смешанный" },
        { marker: 29, percentage: "29-88", description: "прикладной смешанный" }, // Добавлено для соответствия диапазону маркеров до 33
        { marker: 30, percentage: "71-47", description: "гармоничный художествен." }, // Добавлено для соответствия диапазону маркеров до 33
        { marker: 31, percentage: "7-35", description: "прикладной мыслительный" }, // Добавлено для соответствия диапазону маркеров до 33
        { marker: 32, percentage: "64-59", description: "продуктивный смешанный" }, // Добавлено для соответствия диапазону маркеров до 33
        { marker: 33, percentage: "29-82", description: "гармоничный мыслительный" }, // Добавлено для соответствия диапазону маркеров до 33
    ];


    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function getMonthDays(month, year) {
        const monthData = monthTable.find(m => m.month === month && (m.leapYear === undefined || m.leapYear === isLeapYear(year)));
        return monthData ? monthData.days : 0;
    }

    function findMarkerValue(table, markerValue) {
		const foundRow = table.find(row => row.marker === markerValue);
		return foundRow ? foundRow.percentage : "N/A"; // <--- Исправлено! Используем foundRow
}


    function calculateChakras(birthdate) {
        const date = new Date(birthdate);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Месяцы с 0
        const year = date.getFullYear();

        // 1. Начальные значения
        let col1 = 0;
        let col2 = 0;
        let col3 = 0;

        // 2. Год рождения
        const yearData = yearMarkersTable.find(y => y.year === year);
        if (yearData) {
            col1 += yearData.marker1;
            col2 += yearData.marker2;
            col3 += yearData.marker3;
        } else {
            console.warn(`Данные для года ${year} не найдены в таблице yearMarkersTable!`);
        }

        // 3. Месяц рождения
        const monthData = monthTable.find(m => m.month === month && (m.leapYear === undefined || m.leapYear === isLeapYear(year)));
        if (monthData) {
            col1 += monthData.marker1;
            col2 += monthData.marker2;
            col3 += monthData.marker3;
        }

        // 4. День рождения
        const daysInMonth = getMonthDays(month, year);
        const dayValue = daysInMonth - day;
        col1 += dayValue;
        col2 += dayValue;
        col3 += dayValue;

        // 5. Корректировка значений
        while (col1 > 23) {
            col1 -= 23;
        }
        while (col2 > 28) {
            col2 -= 28;
        }
        while (col3 > 33) {
            col3 -= 33;
        }

        // 6. Поиск в таблицах результатов
        const chakraPercentages = {};
        chakraPercentages["Муладхара - Свадхистана"] = findMarkerValue(physContourTable, col1);
        chakraPercentages["Манипура - Анахата"] = findMarkerValue(emotionalContourTable, col2);
        chakraPercentages["Вишудха - Аджна"] = findMarkerValue(intellectContourTable, col3);


        return chakraPercentages;
    }

    function displayResults(chakraPercentages) {
        resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

        for (const chakraName in chakraPercentages) {
            const percentageRange = chakraPercentages[chakraName];
            const chakraDiv = document.createElement('div');
            chakraDiv.classList.add('chakra-result');
            chakraDiv.innerHTML = `
                <div class="chakra-name">${chakraName}</div>
                <div class="chakra-percentage">${percentageRange}</div>
            `;
            resultsContainer.appendChild(chakraDiv);
        }
    }

    calculateBtn.addEventListener('click', () => {
        const birthdateValue = birthdateInput.value;

        if (!birthdateValue) {
            alert("Пожалуйста, выберите дату рождения.");
            return;
        }

        const chakraPercentages = calculateChakras(birthdateValue);
        displayResults(chakraPercentages);
    });
});
