# calendar

Bu Təqvim Tətbiqi istifadəçilərə müxtəlif aylarda naviqasiya etməyə imkan verən dinamik aylıq təqvimi göstərir.

## Əsas Elementlər

1. **monthYearElement**: Cari ayı və ili göstərir.
2. **datesElement**: Seçilmiş ayın günlərini ehtiva edir.
3. **prevMonthButton**: Əvvəlki aya getmək üçün düymə.
4. **nextMonthButton**: Növbəti aya getmək üçün düymə.

## Funksionallıq

cari Təqvim
Bu funksiya:
- Mövcud tarixləri təmizləyir.
- Ay və ili yuxarıda göstərir.
- Ayın ilk gününü və aydakı günlərin sayını hesablayır.
- Ayın birincisindən əvvəlki günlər üçün təqvimi boş divlərlə doldurur.
- Ayın hər günü üçün divlər yaradır və onları tarix elementinə əlavə edir.

ayın dəyişməsi
Bu funksiya istifadəçi naviqasiyası əsasında ay və ili tənzimləyir:
- Ayı azaldır və ya artırır.
- Ay hüdudlardan kənara çıxarsa (yəni, yanvardan az və ya dekabrdan çox) ili tənzimləyir.
- Təqvimi yenilənmiş ay və il ilə yenidən təqdim edir.
