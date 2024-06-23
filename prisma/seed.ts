// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: 'Mouses',
        slug: 'mouses',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101111/image_18_dgnyu9.png',
      },
    })

    const mouses = [
      {
        name: 'Logitech MX Master 3s',
        slug: 'logitech-mx-master-3s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093339/01_mx-master-3s_nxnaly.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719086866/jv1lnvy1c1u1hdvyalcj.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719086866/bcucqh8fmlvxgxflou8h.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719086866/xcx8iypcpjjjvp627t0m.png',
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X Superlight',
        slug: 'logitech-pro-x-superlight',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093425/01_logi-superlight_dqeb4u.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093434/02_logi-superlight_t5b4ts.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093442/03_logi-superlight_myo3qq.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093450/04_logi-superlight_mfe9vc.png',
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: 'Logitech G305 Lightspeed',
        slug: 'logitech-g305-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093631/01_logi-lightspeed_mdkb3a.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093639/02_logi-lightspeed_hun9hv.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093648/03_logi-lightspeed_sxeq4n.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093622/04_logi-lightspeed_we8li8.png',
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: 'Hyperx Pulsefire Dart',
        slug: 'hyperx-pulsefire-dart',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093757/01_hyperx-dart_kxcayu.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093766/02_hyperx-dart_pvmubm.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093776/03_hyperx-dart_ibnlfw.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093785/04_hyperx-dart_y20mrl.png',
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Razer Deathadder V2 Pro',
        slug: 'razer-deathadder-v2-pro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093942/01_razer-deathadder_kd2ij4.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093951/02_razer-deathadder_rvbuyf.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093976/03_razer-deathadder_vfitgp.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093933/04_razer-deathadder_ae6vyq.png',
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ]

    await prisma.product.createMany({
      data: mouses,
    })

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: 'Teclados',
        slug: 'keyboards',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101134/pngimg_1_aezyzt.png',
      },
    })

    const keyboards = [
      {
        name: 'Logitech MX Keys Mini',
        slug: 'logitech-mx-keys-mini',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719091440/01_logi-mx-keys-mini_rdpoi9.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719091418/02_logi-mx-keys-mini_pzq1zy.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719091425/03_logi-mx-keys-mini_kvc6y7.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719091432/04_logi-mx-keys-mini_z5n4bs.png',
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech MX Keys S',
        slug: 'logitech-mx-keys-s',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719096873/01_logi-mx-keys-s_cpz7sc.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719096873/02_logi-mx-keys-s_bdut2r.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719096875/03_logi-mx-keys-s_wc3xuj.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719096873/04_logi-mx-keys-s_o6dlqj.png',
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pop Keys',
        slug: 'logitech-pop-keys',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097000/01_logi-pop-keys_jgujbo.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097001/02_logi-pop-keys_bgiwvf.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097001/03_logi-pop-keys_sxgqu2.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097001/04_logi-pop-keys_w6gxhr.png',
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech MX Mechanical',
        slug: 'logitech-mx-mechanical',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087192/u6br0oz57h2dak81nsae.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087192/ayoiuzdu3bcducldudqg.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087192/cqlzyvnwtc9oyahrqund.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087192/s4hqzaierva7etocvxhm.png',
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Epomaker TH80',
        slug: 'epomaker-th80',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097095/01_epomaker-th80_w39m4n.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097092/02_epomaker-th80_uardko.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097092/03_epomaker-th80_oaqgss.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097093/04_epomaker-th80_xpmzur.png',
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Redragon Gamer Ashe',
        slug: 'redragon-gamer-ashe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097195/01_redragon-gamer-ashe_gznqp5.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097197/02_redragon-gamer-ashe_j2zlej.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097198/03_redragon-gamer-ashe_h7scyt.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097195/04_redragon-gamer-ashe_kztmys.png',
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: keyboards,
    })

    const headphonesCategory = await prisma.category.create({
      data: {
        name: 'Fones',
        slug: 'headphones',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101103/image_15_scuxkq.png',
      },
    })

    const headphones = [
      {
        name: 'Logitech Zone Vibe 100',
        slug: 'logitech-zone-vibe-100',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092810/01_logi-vibe_nxoyvt.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092818/02_logi-vibe_xdejkc.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092795/03_logi-vibe_b7rvag.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092803/04_logi-vibe_hlizmf.png',
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Pro X 2 Lightspeed',
        slug: 'logitech-pro-x-2-lightspeed',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097288/01_logi-lightspeed-phone_sahr7l.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090607/02_logi-lightspeed-phone_iswjbu.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090612/03_logi-lightspeed-phone_rlmv6b.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090618/04_logi-lightspeed-phone_mtpu5m.png',
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Astro A30',
        slug: 'logitech-astro-a30',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097349/01_logi-astro-a30_igak5y.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090761/02_logi-astro-a30_djteir.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090771/03_logi-astro-a30_j5du8w.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090706/04_logi-astro-a30_ov0n2h.png',
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Logitech Zone Wired Earbuds',
        slug: 'logitech-zone-wired-earbuds',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097428/01_logi-earbuds_nfj9du.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097430/02_logi-earbuds_bgtjoe.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097432/03_logi-earbuds_o0lgan.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097434/04_logi-earbuds_vlt4gq.png',
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Hyperx Cloud Stinger 2',
        slug: 'hyperx-cloud-stinger-2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097514/01_hyperx-stinger_j5vcjp.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090847/02_hyperx-stinger_c6wdxg.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090853/03_hyperx-stinger_anahfx.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090859/04_hyperx-stinger_z6kss0.png',
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Razer Kraken X',
        slug: 'razer-kraken-x',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097590/01_razer-kraken_onvskw.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097593/02_razer-kraken_i67aku.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097595/03_razer-kraken_ev61xd.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097597/04_razer-kraken_wnvnde.png',
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: headphones,
    })

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: 'Mousepads',
        slug: 'mousepads',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101107/image_16_r9jjue.png',
      },
    })

    const mousepads = [
      {
        name: 'Logitech Powerplay',
        slug: 'logitech-powerplay',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719097709/01_logi-powerplay_eyah0i.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088859/02_logi-powerplay_ajsabu.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088886/03_logi-powerplay_thdosv.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088888/04_logi-powerplay_r6vnny.png',
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Logitech Desk Mat',
        slug: 'logitech-desk-mat',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092727/01_logi-desk-mat_zbewdm.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088984/02_logi-desk-mat_vt7qze.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088986/03_logi-desk-mat_yuom7h.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088989/04_logi-desk-mat_iajxtp.png',
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Logitech G740',
        slug: 'logitech-g740',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719098078/01_logi-g740_r5ewd2.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089495/02_logi-g740_fylg0v.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089499/03_logi-g740_tp3kc8.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089503/04_logi-g740_aycnmm.png',
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Mousepad Studio Series',
        slug: 'logitech-mousepad-studio-series',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092681/01_logi-studio-series_pm07oc.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089397/02_logi-studio-series_iisxet.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089402/03_logi-studio-series_tt9lh0.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089394/04_logi-studio-series_h5ealo.png',
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Force One Skyhawk Dark',
        slug: 'force-one-skyhawk-dark',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719098078/01_logi-g740_r5ewd2.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089131/02_force-dark_firnxp.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089134/03_force-dark_ocwdgt.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089131/04_force-dark_puehii.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Force One Skyhawk Snow',
        slug: 'force-one-skyhawk-snow',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719098245/01_force-snow_gukmxl.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089264/02_force-snow_xyjmkv.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089268/03_force-snow_neqwr9.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089275/04_force-snow_odg727.png',
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: mousepads,
    })

    const monitorsCategory = await prisma.category.create({
      data: {
        name: 'Monitores',
        slug: 'monitors',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101123/kisspng-computer-monitor-benq-led-backlit-lcd-liquid-cryst-computer-screen-5a9d0ed3e30996_1_aouez7.png',
      },
    })

    const monitors = [
      {
        name: 'Dell S2421HN',
        slug: 'dell-s2421hn',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100443/01_dell-S2421HN_ny7na2.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087957/02_dell-S2421HN_zphw4y.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087957/03_dell-S2421HN_ocvo6h.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087957/04_dell-S2421HN_kmebmr.png',
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Dell P2422H',
        slug: 'dell-p2422h',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100494/01_dell-P2422H_jlvbmi.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087369/02_dell-P2422H_ua9tfs.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087369/03_dell-P2422H_jt2sac.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719087371/04_dell-P2422H_tbfqaa.png',
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Dell P2723QE',
        slug: 'dell-p2723qe',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088112/01_dell-P2723QE_w1amvm.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088109/02_dell-P2723QE_pkjfgu.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088110/03_dell-P2723QE_kbnx0h.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088110/04_dell-P2723QE_fpltye.png',
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell S3422DWG',
        slug: 'dell-s3422dwg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100552/01_dell-S3422DWG_thz72y.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088614/02_dell-S3422DWG_hs7nry.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088615/03_dell-S3422DWG_xucses.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088595/04_dell-S3422DWG_p4ehkt.png',
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell S3222DGM',
        slug: 'dell-s3222dgm',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088262/01_dell-S3222DGM_iin4dy.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088263/02_dell-S3222DGM_uhkuei.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088265/04_dell-S3222DGM_lcizlf.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088267/03_dell-S3222DGM_vwj044.png',
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Dell AW2524HF',
        slug: 'dell-aw2524hf',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100638/01_dell-AW2524HF_dw0seh.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088716/02_dell-AW2524HF_huoiax.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088718/03_dell-AW2524HF_jdorbk.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719088714/04_dell-AW2524HF_viibos.png',
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: monitors,
    })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl:
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719101119/image_19_infmfu.png',
      },
    })

    const speakers = [
      {
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092506/01_logi-surround-z607_fggdj6.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089643/02_logi-surround-z607_pundzz.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089647/03_logi-surround-z607_eqsgm8.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089651/04_logi-surround-z607_revnbz.png',
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100815/01_logi-dock_v9ftkc.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090355/02_logi-dock_d8usug.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090393/03_logi-dock_vnpoor.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090398/04_logi-dock_bfxcns.png',
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719092593/01_sony-SA-Z9R_lqtzes.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089778/02_sony-SA-Z9R_c5wz0e.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089783/03_sony-SA-Z9R_elozzx.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719089774/04_sony-SA-Z9R_nrf8sa.png',
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093158/01_sony-extra-bass_ekx1ta.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093166/02_sony-extra-bass_maz25d.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093173/03_sony-extra-bass_sbbks6.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093182/04_sony-extra-bass_szun6b.png',
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719093081/01_sony-XB23_vtn9rz.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090479/02_sony-XB23_wlt6dw.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090484/03_sony-XB23_n7wlgu.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090475/04_sony-XB23_zm4ktb.png',
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719100933/01_sony-S200F_vcnrjo.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090172/02_sony-S200F_uvyhso.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090176/03_sony-S200F_kjyyvc.png',
          'https://res.cloudinary.com/dgaszw6fn/image/upload/v1719090180/04_sony-S200F_fhcirp.png',
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
