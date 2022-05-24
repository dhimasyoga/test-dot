<template>
    <div class="main-container">
        <div class="input-container">
            <input list="countries" name="country_input"
                    id="country_input" v-model="countrySelected"
                    placeholder="Ketikkan nama negara" autofocus>
            <datalist id="countries">
                <option v-for="c, index in countries" :key="'country-' + index" :value="c">{{ c }}</option>
            </datalist>

            <button @click="cariData()">
                Cari Data
                <i v-show="findingData" class="fa-solid fa-spinner fa-spin-pulse fa-sm"></i>
            </button>
        </div>

        <div v-if="result.length > 0" class="card-result">
            <div class="card-header">
                <div>
                    <p class="mb-3">Negara</p>
                    <p class="result-country mb-0">{{ displayedCountry }}</p>
                </div>

                <div>
                    <p class="mb-3">Populasi</p>
                    <p class="mb-0">{{ formatNumber(result[0].population) }}</p>
                </div>
            </div>

            <div class="card-body">
                <div class="result-list">
                    <p class="mb-0">Total Kasus</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].cases.total) }}</p>
                </div>
                <div class="result-list">
                    <p class="mb-0">Kasus Baru</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].cases.new) }}</p>
                </div>
                <div class="result-list">
                    <p class="mb-0">Kasus Aktif</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].cases.active) }}</p>
                </div>
                <div class="result-list">
                    <p class="mb-0">Kasus Kritis</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].cases.critical) }}</p>
                </div>
                <div class="result-list">
                    <p class="mb-0">Kasus Sembuh</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].cases.recovered) }}</p>
                </div>
                <div class="result-list">
                    <p class="mb-0">Meninggal</p>
                    <p class="mb-0 result">{{ formatNumber(result[0].deaths.total) }}</p>
                </div>
            </div>

            <div class="card-footer">
                Kasus per : {{ todayDate }}
            </div>
        </div>
    </div>
</template>


<script>
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

export default {
    name: 'CountryList',
    data() {
        return {
            countries: [],
            countrySelected: '',
            displayedCountry: '',
            findingData: false,
            todayDate: '',

            result: [],
        }
    },
    methods: {
        fetchCountries() {
            let self = this;
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://covid-193.p.rapidapi.com/countries",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
                    "X-RapidAPI-Key": "e8318631f6msh71727ad978c0c4ap192884jsn12fcd88b7b0c"
                }
            };

            $.ajax(settings).done(function (response) {
                self.countries = response.response;
            });
        },
        cariData() {
            var self = this;
            console.log(self.countrySelected);
            if(self.countrySelected.length == 0) {
                alert('Mohon masukkan nama negara terlebih dahulu');
                $('[autofocus]').focus();

                return false;
            }

            const settings = {
                "async": true,
                "crossDomain": true,
                "url": `https://covid-193.p.rapidapi.com/statistics?country=${self.countrySelected}`,
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
                    "X-RapidAPI-Key": "e8318631f6msh71727ad978c0c4ap192884jsn12fcd88b7b0c"
                }
            };

            self.findingData = true;
            $.ajax(settings).done(function (rsp) {
                if(rsp.response.length == 0) {
                    self.findingData = false;
                    return alert('Mohon masukkan nama negara yang valid');
                } else {
                    self.displayedCountry = self.countrySelected;
                    self.findingData = false;
                    self.result = rsp.response;
                }
            });
        },
        formatNumber(angka) {
            if(!angka) {
                return '-'
            }

            var formatted = Intl.NumberFormat('en-US').format(parseInt(angka));
            return formatted.replaceAll(',', '.');
        }
    },
    mounted() {
        this.fetchCountries();
        $('[autofocus]').focus();

        // todayDate
        var dt = new Date();

        var listBulan = [
            'Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus',
            'September', 'Oktober', 'November', 'Desember'
        ];

        var tgl = dt.getDate();
        var bulan = listBulan[dt.getMonth()];
        var tahun = dt.getFullYear();

        this.todayDate = `${tgl} ${bulan} ${tahun}`;
    }
}

</script>

<style scoped lang="scss">
    $orangeYellow   : #EAB934;
    $darkOrange     : #d9aa2a;
    $softGreen      : #76A78D;

    .main-container {
        width: 60%;
        margin: 0 auto;
    }

    p {
        color: #fff;
        margin-top: 0;
    }

    p.mb-0 {
        margin-bottom: 0
    }

    p.mb-3 {
        margin-bottom: .5rem;
    }

    body {
        color: #58896F !important;
        background-color: #5F9579 !important;
    }                                                                                                                                                                                                                                                   

    .input-container {
        display: flex;
        align-items: center;
        gap: 10px;

        margin-bottom: 2.5rem;
        width: 100%;

        input {
            border: 2px solid #ddd;
            border-radius: 5px;
            
            font-size: 1.15rem;
            outline: none;
            padding: 10px;
            width: 100%;
        }

        button {
            // box-shadow: 3px 4px 0px 0px #b38810;
            background-color: $orangeYellow;
            border-radius:5px;
            border: 2px solid $orangeYellow;
            
            cursor:pointer;
            color:#fff;
            display: block;
            
            font-size: 1.15rem;
            flex-shrink: 0;

            padding: 10px 20px;
            transition: all .2s;

            &:hover {
                background-color: $darkOrange;
                border: 2px solid $darkOrange;
                transition: all .2s;
            }

            i {
                margin-left: 5px;
            }
        }
    }

    .card-result {

        background-color: $softGreen;
        border-radius: 8px;

        padding: 15px;
        
        .card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;

            margin-bottom: 2rem;

            p {
                text-align: left;
            }
        }

        p.result,
        p.result-country {
            font-size: 1.25rem;
            font-weight: 600;
        }

        .card-body {
            margin-bottom: 1.5rem;

            .result-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;

                padding: 1rem 0;
                border-bottom: 1px solid #fff;
            }

            // .result-list:last-child {
            //     border-bottom: none;
            // }
        }

        .card-footer {
            color: #fff;
            text-align: left;
            font-size: .8rem;
        }
    }

    // Responsive utility
    @media only screen and (max-width: 810px) {
        .main-container {
            width: 80%;
        }
    }

    @media only screen and (max-width: 480px) {
        .main-container {
            width: 95%;
        }
    }

</style>