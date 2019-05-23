FactoryBot.define do
  factory :message do
    content{Faker::Lorem.sentence}
    image{File.open("#{Rails.root}/public/ダウンロード.jpeg")}
    user
    group
  end
end
