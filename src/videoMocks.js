const videoIDList = [
  'DTgBLQKRQuA',
  'bgURkoGJ0hs',
  'K5OvG9GJOZE',
  'DTgBLQKRQuA',
  'bgURkoGJ0hs',
  'K5OvG9GJOZE'
]

const videoList = [
  {
    kind: 'youtube#searchResult',
    etag: 'aw_zht8heMspKIByieGHnyn_6B8',
    id: {
      kind: 'youtube#video',
      videoId: 'DTgBLQKRQuA'
    },
    snippet: {
      publishedAt: '2021-05-20T03:00:03Z',
      channelId: 'UCaXkIU1QidjPwiAYu6GcHjg',
      title:
        '‘Bombshell’: Why The Criminal Probe Into The Trump Organization Is A ‘Big Deal’',
      description:
        'It really signals that she thinks, not only is this a strong—and likely winnable—criminal case, but that something is going to happen ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'MSNBC',
      liveBroadcastContent: 'none',
      publishTime: '2021-05-20T03:00:03Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'R3oADXbFuY12P8CcC36O5LUoOkg',
    id: {
      kind: 'youtube#video',
      videoId: 'bgURkoGJ0hs'
    },
    snippet: {
      publishedAt: '2022-01-23T22:49:07Z',
      channelId: 'UCRL5LNzLe0AsDB9V9kE5sAg',
      title: 'Ejercicios para el dolor en el elevador de la escapula o cuello',
      description:
        'Hay un pequeño músculo que va desde la esquina del omóplato hasta el cuello y que puede causar serias molestias en el cuello ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Fisioterapia a tu alcance',
      liveBroadcastContent: 'none',
      publishTime: '2022-01-23T22:49:07Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'wlPpUE-kxSuHFKhmvYBFCY9S-MY',
    id: {
      kind: 'youtube#video',
      videoId: 'K5OvG9GJOZE'
    },
    snippet: {
      publishedAt: '2021-03-09T14:15:00Z',
      channelId: 'UCT4Jg8h03dD0iN3Pb5L0PMA',
      title: 'Disney World: de maravilla a pesadilla',
      description:
        'La pandemia golpeó de lleno a la máquina de hacer sueños en Florida. Decenas de miles de empleados perdieron sus empleos ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'DW Español',
      liveBroadcastContent: 'none',
      publishTime: '2021-03-09T14:15:00Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'aw_zht8heMspKIByieGHnyn_6B8',
    id: {
      kind: 'youtube#video',
      videoId: 'DTgBLQKRQuA'
    },
    snippet: {
      publishedAt: '2021-05-20T03:00:03Z',
      channelId: 'UCaXkIU1QidjPwiAYu6GcHjg',
      title:
        '‘Bombshell’: Why The Criminal Probe Into The Trump Organization Is A ‘Big Deal’',
      description:
        'It really signals that she thinks, not only is this a strong—and likely winnable—criminal case, but that something is going to happen ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/DTgBLQKRQuA/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'MSNBC',
      liveBroadcastContent: 'none',
      publishTime: '2021-05-20T03:00:03Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'R3oADXbFuY12P8CcC36O5LUoOkg',
    id: {
      kind: 'youtube#video',
      videoId: 'bgURkoGJ0hs'
    },
    snippet: {
      publishedAt: '2022-01-23T22:49:07Z',
      channelId: 'UCRL5LNzLe0AsDB9V9kE5sAg',
      title: 'Ejercicios para el dolor en el elevador de la escapula o cuello',
      description:
        'Hay un pequeño músculo que va desde la esquina del omóplato hasta el cuello y que puede causar serias molestias en el cuello ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/bgURkoGJ0hs/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'Fisioterapia a tu alcance',
      liveBroadcastContent: 'none',
      publishTime: '2022-01-23T22:49:07Z'
    }
  },
  {
    kind: 'youtube#searchResult',
    etag: 'wlPpUE-kxSuHFKhmvYBFCY9S-MY',
    id: {
      kind: 'youtube#video',
      videoId: 'K5OvG9GJOZE'
    },
    snippet: {
      publishedAt: '2021-03-09T14:15:00Z',
      channelId: 'UCT4Jg8h03dD0iN3Pb5L0PMA',
      title: 'Disney World: de maravilla a pesadilla',
      description:
        'La pandemia golpeó de lleno a la máquina de hacer sueños en Florida. Decenas de miles de empleados perdieron sus empleos ...',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/default.jpg',
          width: 120,
          height: 90
        },
        medium: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/mqdefault.jpg',
          width: 320,
          height: 180
        },
        high: {
          url: 'https://i.ytimg.com/vi/K5OvG9GJOZE/hqdefault.jpg',
          width: 480,
          height: 360
        }
      },
      channelTitle: 'DW Español',
      liveBroadcastContent: 'none',
      publishTime: '2021-03-09T14:15:00Z'
    }
  }
]

export { videoIDList, videoList }
